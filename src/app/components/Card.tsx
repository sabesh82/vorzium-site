import React from "react";

type CardProps = {
  title?: string;
  description?: string;
  image?: string;
  footer?: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  size?: "sm" | "md" | "lg";
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  footer,
  variant = "default",
  size = "md",
  className,
  imageClassName,
  children,
}) => {
  // Base card styles
  const base = "rounded-lg p-4 bg-white transition";

  // Variant styles
  const variants: Record<NonNullable<CardProps["variant"]>, string> = {
    default: "border border-gray-200 shadow-sm",
    outlined: "border border-gray-300",
    elevated: "shadow-lg",
  };

  // Size styles
  const sizes: Record<NonNullable<CardProps["size"]>, string> = {
    sm: "p-2 text-sm",
    md: "p-4 text-base",
    lg: "p-6 text-lg",
  };

  return (
    <div
      className={`${base} ${variants[variant]} ${sizes[size]} ${
        className ?? ""
      }`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className={`w-full rounded-md mb-3 h-50 transition-all duration-500 ease-in-out ${
            imageClassName ?? "filter grayscale hover:grayscale-0"
          }`}
        />
      )}
      {title && <h3 className="font-semibold text-lg mb-1">{title}</h3>}
      {description && <p className="text-gray-600 mb-2">{description}</p>}
      {children && <div className="mb-2">{children}</div>}
      {footer && <div className="border-t pt-2 mt-2">{footer}</div>}
    </div>
  );
};

export default Card;
