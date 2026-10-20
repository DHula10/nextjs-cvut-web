"use client";
import TextInput from "@/app/components/form/TextInput"
import TextArea from "@/app/components/form/TextArea"
import Button from "@/app/components/button"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from 'next/navigation'; 
import LoadingOverlay from "@/app/components/loadingOverlay";



type FormValues = {
    name: string;
    email: string;
    telephone?: string;
    availableTime?: string;
    message: string;
    company?: string;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormValues) => {
        if (data.company) {
            console.warn("Honeypot field filled. Possible bot submission.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('/api/contact-home', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    telephone: data.telephone,
                    availableTime: data.availableTime,
                    message: data.message,
                }),
            });
            
            if (res.ok) {
                reset();
                router.push('/form-success');
            } else if (res.status === 429) {
                // Rate limited
                const errorData = await res.json();
                console.error('Rate limited:', errorData.error);
                alert(errorData.error || 'Příliš mnoho požadavků. Zkuste to znovu později.');
            } else {
                throw new Error('Chyba při odesílání formuláře');
            }
        } catch (error) {
            console.error(error);
            reset();
            router.push('/error');  // redirect to generic error page
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>

            <div className="flex flex-wrap gap-4 justify-center">

                <div className="flex flex-col gap-4 w-full min-w-0 xl:w-[480px]">

                    <TextInput
                        name="name"
                        label="Jméno"
                        placeholder="Zadejte své jméno"
                        required
                        register={register}
                        error={errors.name}
                    />

                    <TextInput
                        name="email"
                        label="E-mail"
                        placeholder="Zadejte svůj e-mail"
                        type="email"
                        required
                        regexPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        register={register}
                        error={errors.email}
                        errorMessage="Zadejte platný formát e-mailu."
                    />
                </div>

                <div className="flex flex-col gap-4 w-full min-w-0 xl:w-[480px]">

                    <TextInput
                        name="telephone"
                        label="Telefon"
                        placeholder="Zadejte telefonní číslo"
                        type="tel"
                        register={register}
                        regexPattern="^\+?[0-9\s\-()]{7,15}$"
                        errorMessage="Zadejte platný formát telefonního čísla."
                        error={errors.telephone}
                    />

                    <TextInput
                        name="availableTime"
                        label="Kdy se ti dovoláme?"
                        placeholder="Např. Po–Pá 9:00–17:00"
                        register={register}
                        error={errors.availableTime}
                    />
                </div>

                <div className="w-full xl:w-[992px]">
                    <TextArea
                        name="message"
                        label="Co budeme řešit?"
                        placeholder="Zadejte svou zprávu"
                        required
                        register={register}
                        error={errors.message}
                    />
                </div>

            </div>
            
            {/* Honeypot field */}
            <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                {...register("company")}
            />

            <div className="flex justify-center">
                <Button
                    isLink={false}
                    label="Odeslat"
                    disabled={loading}
                    type="submit"
                    bgColor="o"
                    inverse
                />
            </div>

            {loading && <LoadingOverlay />}

        </form>
    );
}