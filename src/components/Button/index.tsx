import type { FC } from "react";
import type { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ label, className, variant = "default", ...props}) => {
 const styles = variant === "default" ? "bg-primary text-white" : "border text-black"; 
  return (
    <button
      className={`${styles} hover:opacity-95 px-10 py-3 lg:px-12 lg:py-4 rounded cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
