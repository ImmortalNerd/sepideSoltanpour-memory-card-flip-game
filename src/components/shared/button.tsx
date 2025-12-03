import React from "react";

type ButtonVariant = "contained" | "outlined" | "text";
type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "primary" | "secondary" | "success" | "error" | "warning" | "info";

type ButtonProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  children,
  className = "",
  onClick,
  type = "button",
}) => {

    const baseClasses = `
    inline-flex items-center justify-center rounded-md font-medium outline-none transition-colors duration-150
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `;

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };

  const colorMap = {
    primary: {
      contained: "bg-blue-600 hover:bg-blue-700 text-white",
      outlined: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      text: "text-blue-600 hover:bg-blue-100",
    },
    secondary: {
      contained: "bg-gray-600 hover:bg-gray-700 text-white",
      outlined: "border border-gray-600 text-gray-600 hover:bg-gray-50",
      text: "text-gray-600 hover:bg-gray-100",
    },
    success: {
      contained: "bg-green-600 hover:bg-green-700 text-white",
      outlined: "border border-green-600 text-green-600 hover:bg-green-50",
      text: "text-green-600 hover:bg-green-100",
    },
    error: {
      contained: "bg-red-600 hover:bg-red-700 text-white",
      outlined: "border border-red-600 text-red-600 hover:bg-red-50",
      text: "text-red-600 hover:bg-red-100",
    },
    warning: {
      contained: "bg-yellow-600 hover:bg-yellow-700 text-white",
      outlined: "border border-yellow-600 text-yellow-600 hover:bg-yellow-50",
      text: "text-yellow-600 hover:bg-yellow-100",
    },
    info: {
      contained: "bg-cyan-600 hover:bg-cyan-700 text-white",
      outlined: "border border-cyan-600 text-cyan-600 hover:bg-cyan-50",
      text: "text-cyan-600 hover:bg-cyan-100",
    },
  };

  const variantClasses = colorMap[color]?.[variant] || colorMap.primary[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;