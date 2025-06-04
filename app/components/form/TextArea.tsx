import React from 'react';

type TextAreaProps = {
    name: string;
    label: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
};

export default function TextArea({
    name,
    label,
    placeholder,
    value,
    onChange,
    required = false,
    disabled = false,
    error = false,
    errorMessage = "Toto pole je povinné.",
}: TextAreaProps) {
    return (
        <div className="flex flex-col gap-2 max-w-[480px] h-[240px]">
            <label htmlFor={name} className="heading6 text-cvut-black">
                {label}
                {required && <span>*</span>}
            </label>
            <textarea
                id={name}
                name={name}
                className={`bg-cvut-black/5 rounded-2xl p-4 body-s flex-1 resize-none scroll-auto focus:outline-cvut-blue/40 ${error ? 'outline outline-cvut-red' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange as any}
                required={required}
                disabled={disabled}
            />
            <span className={`body-s text-cvut-red transition-opacity duration-200 ${error ? 'visible' : 'invisible'}`}>
                {errorMessage}
            </span>
        </div>
    );
}