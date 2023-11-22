import { FormValues } from "../types";
import { CreateRecipientRequest } from "types/aws";
import { redot } from "../helpers/dot";

export default function formToCreateRecipientRequest(
  formValues: Omit<FormValues, "bankStatementFile">
): CreateRecipientRequest {
  const { accountHolderName, ...requirements } = formValues.requirements;

  return {
    accountHolderName: accountHolderName as string,
    currency: formValues.currency,
    type: formValues.type,
    ownedByCustomer: false,
    profile: "{{profileId}}", // AWS replaces it with actual Profile ID
    details: Object.entries(requirements).reduce<
      CreateRecipientRequest["details"]
    >((details, [key, value]) => {
      const origKey = redot(key);

      if (value == null) {
        // if value is null/undefined, it's probably optional,
        // so don't include it
        return details;
      }

      if (typeof value === "string") {
        // if value is string
        details[origKey] = value;
      } else if ("code" in value) {
        // if value is Country
        details[origKey] = value.code;
      } else {
        // if value is OptionType
        details[origKey] = value.value;
      }
      return details;
    }, {}),
  };
}