import { PropsWithChildren } from "react";
import {
  FieldValues,
  Path,
  UseFormRegisterReturn,
  get,
  useFormContext,
} from "react-hook-form";
import { unpack } from "./helpers";
import { Classes } from "./types";

type Common = PropsWithChildren<{
  classes?: Classes;
  disabled?: boolean;
  required?: boolean;
}>;

export function CheckField<T extends FieldValues>({
  name,
  disabled,
  ...rest
}: Common & {
  name: Path<T>;
}) {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<T>();

  return (
    <NativeCheckField
      {...register(name)}
      {...rest}
      disabled={disabled || isSubmitting}
      error={get(errors, name)?.message}
    />
  );
}

export function NativeCheckField({
  classes,
  disabled,
  required,
  children,
  error,
  ...registerReturn
}: Common & UseFormRegisterReturn & { error?: string }) {
  const { container, input: int, lbl, error: errClass } = unpack(classes);
  const name = registerReturn.name;
  const id = `__${name}`;

  return (
    <div className={`check-field ${container}`}>
      <input
        {...registerReturn}
        className={int + " peer"}
        type="checkbox"
        id={id}
        disabled={disabled}
        aria-disabled={disabled}
        aria-invalid={!!error}
      />
      {children && (
        <label data-required={required} className={lbl} htmlFor={id}>
          {children}
        </label>
      )}

      {error && (
        <p data-error className={errClass}>
          {error}
        </p>
      )}
    </div>
  );
}
