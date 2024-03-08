import React, { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const IInput: FC<InputProps> = ({ className, ...rest }) => {
  className = twMerge(
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
    className
  );

  return <input {...rest} className={className} />;
};

export default IInput;
