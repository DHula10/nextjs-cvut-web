
import React from 'react';

type TextInputProps = {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    regexPattern?: string;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
};

export default function TextInput({
    name,
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    required = false,
    regexPattern,
    disabled = false,
    error = false,
    errorMessage = "Toto pole je povinné.",
}: TextInputProps) {
    return (
        <div className='flex flex-col gap-2 max-w-[480px]'>
            <label htmlFor={name} className='heading6 text-cvut-black'>
                {label}
                {required && <span>*</span>}
            </label>
            <input
                id={name}
                name={name}
                className={`bg-cvut-black/5 rounded-2xl p-4 body-s focus:outline-cvut-blue/40 ${error ? 'outline outline-cvut-red' : ''}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                pattern={regexPattern}
                disabled={disabled}
            />
            <span className={`body-s text-cvut-red transition-opacity duration-200 ${error ? 'visible' : 'invisible'}`}>
                {errorMessage}
            </span>
        </div>
    );
}