import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  variant?: string;
  size?: string;
}

const Button: React.FC<Props> = ({ children, type, className, ...rest }) => {
  return (
    <button
      type={type}
      {...rest}
      className={`bg-green-500 flex p-1 px-2 mx-2 rounded-lg text-white justify-center hover:bg-green-600 hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
