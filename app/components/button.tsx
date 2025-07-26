import React from 'react';

type ButtonProps = {
  isLink: boolean;
  label: string;
  bgColor?: 'r' | 'g' | 'o' | 'y';
  disabled?: boolean;
  href?: string;
  inverse?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
};

const colorMap = {
  r: 'bg-cvut-red',
  g: 'bg-cvut-green',
  o: 'bg-cvut-orange',
  y: 'bg-cvut-yellow',
};

const Button = ({ isLink, label, bgColor, href, inverse = false, onClick, type = 'button', disabled, target, ...rest }: ButtonProps) => {
  const bgClass = bgColor ? colorMap[bgColor] : '';
  const textClass = inverse ? 'text-cvut-black' : 'text-cvut-white';
  const opacityClass = inverse ? 'opacity-50' : '';

  const content = (
    <>
      <span className={`text-base font-bold leading-4 uppercase ${textClass}`}>
        {label}
      </span>
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full -z-10 h-16 w-16
        ${bgClass} ${opacityClass}
        transition-all duration-300 group-hover:w-full group-active:scale-90`}
      />
    </>
  );

  const commonClasses = 'p-6 w-fit relative z-10 group cursor-pointer';

  return isLink ? (
    <a className={commonClasses} target={target} href={href} {...rest}>
      {content}
    </a>
  ) : (
    <button className={commonClasses} type={type} onClick={onClick} disabled={disabled} {...rest}>
      {content}
    </button>
  );
};

export default Button;