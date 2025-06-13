"use client";
import TextInput from "@/app/components/form/TextInput"
import TextArea from "@/app/components/form/TextArea"
import FileInput from "@/app/components/form/FileInput";
import Button from "@/app/components/button"
import { useForm } from "react-hook-form";

type FormValues = {
    fullName: string;
    email: string;
    projectName: string;
    investmentAmountRequested: number;
    projectSummary: string;
    note: string;
    file: FileList;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormValues>({ mode: "onSubmit", criteriaMode: "all" });

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-row gap-4 sm:flex-col md:flex-col lg:flex-row">

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

                    <FileInput
                        name="file"
                        label="Příloha"
                        register={register}
                        error={errors.file}
                        required={false}
                        setValue={setValue}
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

            <Button
                isLink={false}
                label="Odeslat"
                type="submit"
                bgColor="r"
                inverse
            />

        </form>
    );
}