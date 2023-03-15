import { ReactNode } from 'react';

export type ModalProps = {
  size?: 'md' | 'lg';
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
