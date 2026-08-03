import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'surface' | 'stone' | 'sand' | 'asymmetric';
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverEffect = true,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'p-6 sm:p-8 rounded-[2rem] border border-border/50 transition-all duration-300 relative overflow-hidden';

  const variants = {
    default: 'bg-surface shadow-soft',
    surface: 'bg-white shadow-soft',
    stone: 'bg-muted/60 shadow-soft',
    sand: 'bg-accent/40 shadow-soft',
    asymmetric: 'bg-surface shadow-soft rounded-tl-[4rem] rounded-br-[4rem]',
  };

  const hoverStyles = hoverEffect ? 'hover:-translate-y-1.5 hover:shadow-soft-lg hover:border-primary/30' : '';

  return (
    <div
      className={twMerge(clsx(baseStyles, variants[variant], hoverStyles, className))}
      {...props}
    >
      {children}
    </div>
  );
};
