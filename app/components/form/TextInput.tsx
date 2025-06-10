import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

type TextInputProps = {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
    regexPattern?: string;
    register: UseFormRegister<any>;
    error?: FieldError;
    errorMessage?: string;
};

export default function TextInput({
    name,
    label,
    placeholder,
    type = "text",
    required = false,
    disabled = false,
    regexPattern,
    register,
    error,
    errorMessage = "Toto pole je povinné.",
}: TextInputProps) {
    return (
        <div className="flex flex-col gap-2 max-w-[480px] min-h-[104px]">
            <label htmlFor={name} className="heading6 text-cvut-black">
                {label}
                {required && <span>*</span>}
            </label>
            <input
                id={name}
                className={`bg-cvut-black/5 rounded-2xl p-4 body-s focus:outline-cvut-blue/40 ${error ? 'outline outline-cvut-red focus:outline-cvut-red' : ''}`}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                maxLength={100}
                {...register(name, {
                    required: required,
                    pattern: regexPattern
                        ? { value: new RegExp(regexPattern), message: errorMessage }
                        : undefined,
                })}
            />
            <span className={`body-s text-cvut-red transition-opacity duration-200 ${error ? 'visible' : 'invisible'}`}>
                {error?.message || errorMessage ? errorMessage : ''}
            </span>
        </div>
    );
}