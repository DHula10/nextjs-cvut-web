import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

type TextAreaProps = {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
    disabled?: boolean;
    register: UseFormRegister<any>;
    error?: FieldError;
};

export default function TextArea({
    name,
    label,
    placeholder,
    required = false,
    disabled = false,
    register,
    error,
}: TextAreaProps) {
    return (
        <div className="flex flex-col gap-2 w-full min-h-[224px]">
            <label htmlFor={name} className="heading6 text-cvut-black">
                {label}
                {required && <span>*</span>}
            </label>
            <textarea
                id={name}
                className={`bg-cvut-black/5 rounded-2xl p-4 body-s flex-1 resize-none scroll-auto focus:outline-cvut-blue/40 ${error ? 'outline outline-cvut-red focus:outline-cvut-red' : ''}`}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                {...register(name, { 
                    required: required ? "Toto pole je povinné." : false, 
                    maxLength: { value: 500, message: "Maximální délka je 500 znaků." }
                }) }
            />
            <span className={`body-s min-h-[18px] text-cvut-red transition-opacity duration-200 ${error ? 'visible' : 'invisible'}`}>
                {error?.message}
            </span>
        </div>
    );
}