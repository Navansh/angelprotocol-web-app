import { FormValues } from "./types";
import { AccountRequirements } from "types/aws";
import { undot } from "./dot";

export default function getDefaultValues(
  accountRequirements: AccountRequirements,
  targetCurrency: string
): FormValues {
  return {
    currency: targetCurrency,
    accountHolderName: "ENDOWMENT_NAME",
    type: accountRequirements.type,
    requirements: accountRequirements.fields.reduce<FormValues["requirements"]>(
      (defaultValues, field) => {
        field.group.forEach((requirements) => {
          const key = undot(requirements.key);

          if (requirements.type === "text" || requirements.type === "date") {
            defaultValues[key] = "";
          } else {
            defaultValues[key] = {
              label: requirements.example || "Select...", // this field contains dropdown placeholder text for `select`; for `radio` it's empty string
              value: "",
            };
          }
        });

        return defaultValues;
      },
      {}
    ),
  };
}