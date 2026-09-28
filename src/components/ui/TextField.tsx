import type { InputHTMLAttributes } from "react";

type TextFieldProps = {
  id: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

/** Labelled input used by both auth forms. */
export function TextField({ id, label, className = "", ...rest }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-m text-ink-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className={`h-14 w-full rounded-2xl border border-ink-200 px-5 text-body-m text-ink-950 outline-none transition-colors placeholder:text-ink-300 focus:border-brand-600 ${className}`}
        {...rest}
      />
    </div>
  );
}
