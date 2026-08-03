import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-body font-bold rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft hover:shadow-soft-lg hover:scale-[1.02]',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-clay hover:scale-[1.02]',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
  };

  const sizes = {
    sm: 'h-10 px-5 text-sm gap-2',
    md: 'h-12 px-7 text-base gap-2.5',
    lg: 'h-14 px-9 text-lg gap-3',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </button>
  );
};
