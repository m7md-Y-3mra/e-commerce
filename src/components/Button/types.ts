export interface ButtonProps {
  label: string;
  className?: string;
  variant?: "default" | "outline",
  disable?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}