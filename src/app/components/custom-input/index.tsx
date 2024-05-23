import React from "react";

interface IFormInput {
  placeholder: string;
  labelText?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  type?: string;
  className?: string;
  checked?: boolean;
}

interface ITextAreaInput {
  placeholder: string;
  labelText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string;
}
export const CustomInput = ({
  placeholder,
  labelText,
  value,
  onChange,
  errorMessage,
  type,
  className,
  checked,
  ...rest
}: IFormInput) => {
  return (
    <div className="w-full">
      {labelText && (
        <label className=" font-medium text-lg text-gray-600">
          {labelText}
        </label>
      )}
      <input
        className=" h-[50px] rounded-sm pl-3 border border-b-gray-500 w-full bg-white placeholder:text-gray-600 outline-none"
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      {errorMessage && <p className="">{errorMessage}</p>}
    </div>
  );
};

export const CustomTextAreaInput = ({
  value,
  placeholder,
  labelText,
  onChange,
  errorMessage,
}: ITextAreaInput) => {
  return (
    <div className="w-full">
      {labelText && (
        <label className=" font-medium text-lg text-gray-600">
          {labelText}
        </label>
      )}
      <textarea
        cols={10}
        rows={5}
        className="rounded-sm border-transparent w-full pl-3 bg-white placeholder:text-gray-600 outline-none border border-b-gray-500 "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
      {errorMessage && <p className="">{errorMessage}</p>}
    </div>
  );
};
