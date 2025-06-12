"use client";
import UploadIcon from "@/public/icons/UploadIcon";
import { UseFormRegister, FieldError, UseFormSetValue } from 'react-hook-form';
import { useRef, useState } from "react";


type FileInputProps = {
    name: string;
    label: string;
    register: UseFormRegister<any>;
    setValue: UseFormSetValue<any>;
    error?: FieldError;
    required?: boolean;
};

const FileInput = ({ name, label, register, setValue, error, required }: FileInputProps) => {

    const [files, setFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            const selectedArray = Array.from(selectedFiles);

            const existingNames = new Set(files.map(f => f.name));
            const newUniqueFiles = selectedArray.filter(file => !existingNames.has(file.name));

            const updatedFiles = [...files, ...newUniqueFiles];
            setFiles(updatedFiles);

            updateInputFiles(updatedFiles);
        }
    };

    const handleRemove = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);

        updateInputFiles(newFiles);
    }

    const updateInputFiles = (newFiles: File[]) => {
        const dataTransfer = new DataTransfer();
        newFiles.forEach(file => dataTransfer.items.add(file));

        if (inputRef.current) {
            inputRef.current.files = dataTransfer.files;
        }

        setValue(name, dataTransfer.files, { shouldValidate: true });
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 w-fit px-4 py-2 cursor-pointer text-cvut-black hover:text-cvut-blue transition-colors">
                <UploadIcon />
                <span className="heading6">{label}</span>
                <input
                    id={name}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt,.heic"
                    className="hidden"
                    {...register(name, {
                        required: required ? "Toto pole je povinné." : false,
                    })}
                    ref={inputRef}
                    onChange={handleFileChange}
                />
            </label>
            <span className="text-sm text-cvut-gray">PDF, DOC, DOCX, TXT (MAX 5MB)</span>
            {files.length > 0 && (
                <ul className="text-sm text-cvut-black space-y-1">
                    {files.map((file, i) => (
                        <li key={i} className="flex items-center justify-between gap-2 py-2 px-4 hover:bg-cvut-black/5 rounded-2xl">
                            <span className="truncate">
                                📄 {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                            <button
                                type="button"
                                className="text-cvut-red text-xs cursor-pointer rounded-2xl relative right-0 py-2 px-4 hover:bg-red-100"
                                onClick={() => handleRemove(i)}
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {error && (
                <span className="text-cvut-red text-sm">
                    {error.message || "Nastala chyba při nahrávání souboru."}
                </span>
            )}
        </div>
    );
}
export default FileInput;