"use client";
import TextInput from "@/app/components/form/TextInput"
import TextArea from "@/app/components/form/TextArea"
import Button from "@/app/components/button"
import { useForm } from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    telephone?: string;
    availableTime?: string;
    message: string;
// Removed the unused `file` field from the `FormValues` type.
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-0 lg:gap-4" noValidate>

            <div className="flex flex-col gap-0 lg:gap-4 sm:flex-col md:flex-col lg:flex-row flex-wrap justify-center">

                <div className="flex flex-col gap-0 lg:gap-4 min-w-[480px] lg:min-w-[400px] xl:min-w-[480px] ">

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

                <div className="flex flex-col gap-0 lg:gap-4 min-w-[480px] lg:min-w-[400px] xl:min-w-[480px]">

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

                <div className="flex gap-4 sm:flex-col md:flex-col lg:flex-row">
                    <div className="min-w-[480px] lg:min-w-[400px] xl:min-w-[480px]">
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
            </div>
            <div className="flex justify-center">
                <Button
                    isLink={false}
                    label="Odeslat"
                    type="submit"
                    bgColor="o"
                    inverse
                />
            </div>
        </form>
    );
}