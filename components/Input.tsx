"use client";

import React from "react";
import style from "./Input.module.scss";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * @value : 사용자가 입력한 값을 저장할 state
   */
  value: string | number;
  type: "number" | "text";
  min?: number;
  max?: number;
}

const Input = React.forwardRef(
  (
    { value, type, max, min, ...props }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <input
        type={type ? type : "text"}
        ref={ref}
        className={style.input}
        max={max ? max : undefined}
        min={min ? min : 0}
        value={value}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
export default Input;
