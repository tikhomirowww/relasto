export interface InputProps {
  prefixIcon?: React.ReactNode;
  postfixIcon?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  width?: string;
  value: string;
  type: 'text' | 'password' | 'number';
}
