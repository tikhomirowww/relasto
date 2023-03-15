export type CheckBoxProps = {
  label: string;
  isChecked: boolean;
  onToggle: (isChecked: boolean) => void;
  className?: string;
};
