import React from 'react';
import { cn } from '@/lib/utils';

interface BaseFieldProps {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  className?: string;
}

interface InputProps extends BaseFieldProps, React.InputHTMLAttributes<HTMLInputElement> {
  as?: 'input';
}

interface TextareaProps extends BaseFieldProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: 'textarea';
}

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends BaseFieldProps, React.SelectHTMLAttributes<HTMLSelectElement> {
  as: 'select';
  options: SelectOption[];
  placeholder?: string;
}

type FormFieldProps = InputProps | TextareaProps | SelectProps;

export const FormField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FormFieldProps
>((props, ref) => {
  const { label, error, helperText, required, className, as = 'input', id: providedId } = props;
  const autoId = React.useId();
  const id = providedId || autoId;

  const baseInputStyles =
    'w-full rounded-xl border bg-white dark:bg-brand-card/90 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all';
  const borderStyles = error
    ? 'border-red-500 focus:border-red-500'
    : 'border-slate-300 dark:border-white/15 focus:border-brand-blue';

  return (
    <div className={cn('space-y-1.5', className)}>
      <label htmlFor={id} className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>

      {as === 'textarea' ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          id={id}
          rows={(props as TextareaProps).rows || 4}
          className={cn(baseInputStyles, borderStyles)}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : as === 'select' ? (
        <select
          ref={ref as React.Ref<HTMLSelectElement>}
          id={id}
          className={cn(baseInputStyles, borderStyles, 'cursor-pointer')}
          {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          {(props as SelectProps).placeholder && (
            <option value="" disabled>
              {(props as SelectProps).placeholder}
            </option>
          )}
          {(props as SelectProps).options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white dark:bg-brand-midnight text-slate-800 dark:text-white">
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          id={id}
          className={cn(baseInputStyles, borderStyles)}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {error ? (
        <p className="text-xs text-red-500 font-medium animate-fadeIn">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-slate-400">{helperText}</p>
      ) : null}
    </div>
  );
});

FormField.displayName = 'FormField';

