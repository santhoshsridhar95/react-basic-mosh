// import React from "react";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger"; // To define these are valid values
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
