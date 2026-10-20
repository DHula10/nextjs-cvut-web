"use client";
import TextInput from "@/app/components/form/TextInput"
import TextArea from "@/app/components/form/TextArea"
import FileInput from "@/app/components/form/FileInput";
import Button from "@/app/components/button"

import LoadingOverlay from "@/app/components/loadingOverlay";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormValues = {
    fullName: string;
    email: string;
    projectName: string;
    investmentAmountRequested: number;
    projectSummary: string;
    note: string;
    file: FileList;
    company?: string; // Honeypot field
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<FormValues>({ mode: "onSubmit", criteriaMode: "all" });

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormValues) => {
        // Honeypot validation
        if (data.company) {
            console.warn("Honeypot field filled. Possible bot submission.");
            return;
        }
        
        setLoading(true);
        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("email", data.email);
        formData.append("projectName", data.projectName);
        formData.append("investmentAmountRequested", data.investmentAmountRequested.toString());
        formData.append("projectSummary", data.projectSummary);
        formData.append("note", data.note);

        if (data.file && data.file.length > 0) {
            Array.from(data.file).forEach((file) => {
                formData.append('files', file);
            });
        }

        try {
            const res = await fetch('/api/contact-ingine', {
                method: 'POST',
                body: formData,
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
            router.push('/error');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col gap-4 sm:flex-col md:flex-col lg:flex-row">

                <div className="flex flex-col gap-4 flex-1">
                    <TextInput
                        name="fullName"
                        label="Celé jméno"
                        placeholder="Zadejte své jméno a příjmení"
                        required
                        register={register}
                        error={errors.fullName}
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

                    <TextInput
                        name="projectName"
                        label="Název projektu"
                        placeholder="Zadejte název svého projektu"
                        required
                        register={register}
                        error={errors.projectName}
                    />
                    <TextInput
                        name="investmentAmountRequested"
                        label="Požadovaná částka investice"
                        placeholder="Zadejte požadovanou částku v Kč"
                        type="number"
                        required
                        register={register}
                        error={errors.investmentAmountRequested}
                    />
                </div>

                <div className="flex flex-col gap-4 flex-1">

                    <TextArea
                        name="projectSummary"
                        label="Shrnutí projektu"
                        placeholder="Zadejte shrnutí svého projektu"
                        required
                        register={register}
                        error={errors.projectSummary}
                    />

                    <TextArea
                        name="note"
                        label="Poznámka"
                        placeholder="Zadejte svou poznámku"
                        required={false}
                        register={register}
                        error={errors.note}
                    />
                </div>
            </div>

            <FileInput
                        name="file"
                        label="Příloha"
                        register={register}
                        error={errors.file}
                        required={false}
                        setValue={setValue}
                    />

            {/* Honeypot field */}
            <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                {...register("company")}
            />

            <Button
                isLink={false}
                label="Odeslat"
                disabled={loading}
                type="submit"
                bgColor="r"
                inverse
            />

            {loading && <LoadingOverlay />}

        </form>
    );
}
