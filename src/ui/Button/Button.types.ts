import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'outlined' | 'filled';
  children: ReactNode;
};
