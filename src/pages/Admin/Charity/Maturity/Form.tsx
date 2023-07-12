import { FormHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { FV } from "./types";
import Addresses from "components/Addresses";
import { Reset, Submit, Tooltip } from "components/admin";
import { Toggle } from "components/ast";
import { Field } from "components/form";

export default function Form({
  tooltip,
  ...props
}: FormHTMLAttributes<HTMLFormElement> & { tooltip?: string }) {
  const {
    watch,
    formState: { isDirty },
  } = useFormContext<FV>();
  const willMature = watch("willMature");
  return (
    <form
      {...props}
      className="grid content-start gap-y-6 @lg:gap-y-8 @container"
    >
      <fieldset disabled={!!tooltip} className="contents group">
        <h2 className="text-[2rem]">Maturity</h2>
        {tooltip && <Tooltip tooltip={tooltip} />}
        <Toggle<FV> name="willMature" classes={{ label: "text-sm" }}>
          Set maturity
        </Toggle>
        {willMature ? (
          <>
            <Field<FV, "date">
              type="date"
              name="date"
              label="Maturity date"
              placeholder="DD/MM/YYYY"
              classes={{
                container:
                  "rounded border border-prim p-4 @lg:p-8 bg-white dark:bg-blue-d6",
                input: "date-input uppercase mt-2 field-input-admin",
                label: "text-xl font-bold",
              }}
            />

            <Addresses<FV, "beneficiaries">
              memberName="beneficiary"
              name="beneficiaries"
              title="Beneficiaries"
              emptyMsg="Multisig wallet is the only beneficiary"
              classes="bg-white dark:bg-blue-d6 p-4 @lg:p-8"
            />
          </>
        ) : null}
        <div className="flex justify-start gap-3 w-full group-disabled:hidden">
          <Reset disabled={!isDirty}>Reset changes</Reset>
          <Submit>Submit changes</Submit>
        </div>
      </fieldset>
    </form>
  );
}
