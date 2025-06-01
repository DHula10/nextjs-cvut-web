import React from 'react';

type ButtonProps = {
    isLink: boolean;
    label: string;
    bgColor?: string;
    href?: string;
    inverse?: boolean;
};

const Button = ({ isLink, label, bgColor, href, inverse = false }: ButtonProps) => {

    let bgClass = '';
    switch (bgColor) {
        case 'r':
            bgClass = 'bg-cvut-red';
            break;
        case 'g':
            bgClass = 'bg-cvut-green';
            break;
        case 'o':
            bgClass = 'bg-cvut-orange';
            break
        case 'y':
            bgClass = 'bg-cvut-yellow';
            break;
        default:
            bgClass = '';
    }


    const content = (
        <>
            <span className={`text-base font-bold leading-4 uppercase ${inverse ? 'text-cvut-black' : 'text-cvut-white'}`}>
                {label}
            </span>
            <span className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full w-16 -z-10 h-16 
                ${bgClass} 
                ${inverse ? 'opacity-50' : ''} 
                transition-all duration-300 w-16 group-hover:w-full`}></span>
        </>
    );

    return isLink ? (
        <a className="p-6 relative group overflow-hidden " href={href}>
            {content}
        </a>
    ) :
        (
            <button className="p-6 relative group overflow-hidden">
                {content}
            </button>
        );
};

export default Button;