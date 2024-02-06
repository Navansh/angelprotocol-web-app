import CurrencySelector from "components/CurrencySelector";
import { CheckField, Field } from "components/form";
import { FormProvider, useController, useForm } from "react-hook-form";
import { requiredString } from "schemas/string";
import { useStripeCurrenciesQuery } from "services/apes";
import { setDetails } from "slices/donation";
import { useGetter, useSetter } from "store/accessors";
import { userIsSignedIn } from "types/auth";
import { Currency } from "types/components";
import { FormValues, Props } from "./types";

const USD_CODE = "usd";

export default function Form({ recipient, widgetConfig, details }: Props) {
  const authUser = useGetter((state) => state.auth.user);
  const dispatch = useSetter();
  const authUserEmail = userIsSignedIn(authUser) ? authUser.email : "";

  const currencies = useStripeCurrenciesQuery(null);

  const initial: FormValues = {
    source: widgetConfig ? "bg-widget" : "bg-marketplace",
    amount: "",
    currency: { code: USD_CODE, min: 1 },
    email: authUserEmail,
    userOptForKYC: false,
  };

  const methods = useForm<FormValues>({
    defaultValues: details || initial,
  });
  const { control, handleSubmit } = methods;

  const {
    field: { value: currency, onChange: onCurrencyChange },
  } = useController({
    control: control,
    name: "currency",
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((fv) =>
          dispatch(
            setDetails({
              ...fv,
              method: "stripe",
            })
          )
        )}
        className="grid gap-4"
      >
        <CurrencySelector
          currencies={currencies}
          label="Currency"
          onChange={onCurrencyChange}
          value={currency}
          classes={{ label: "font-semibold" }}
          required
        />
        <Field<FormValues>
          name="amount"
          label="Donation amount"
          classes={{ label: "font-semibold" }}
          required
          // validation must be dynamicly set depending on which exact currency is selected
          registerOptions={{
            required: "required",
            min: currency.min
              ? {
                  value: currency.min,
                  message: `must be greater than ${currency.min}`,
                }
              : undefined,
            pattern: {
              value: /[0-9]+/,
              message: "must be a number",
            },
            shouldUnregister: true,
          }}
          tooltip={createTooltip(currency)}
        />
        {!authUserEmail && (
          <Field<FormValues>
            name="email"
            label="Email"
            required
            classes={{ label: "font-semibold" }}
            registerOptions={{
              required: "required",
              validate: (value) =>
                requiredString.email().isValidSync(value) || "invalid email",
            }}
          />
        )}
        {!recipient.isKYCRequired && (
          // if KYC is required, the checkbox is redundant
          <CheckField<FormValues>
            name="userOptForKYC"
            classes={{
              container: "text-sm",
              error: "mt-2",
            }}
          >
            Please send me a tax receipt
          </CheckField>
        )}

        <p className="text-sm text-gray-d2 dark:text-gray mt-4">
          Please click the button below and follow the instructions provided to
          complete your donation
        </p>

        <button className="btn-orange btn-donate mt-2" type="submit">
          Continue
        </button>
      </form>
    </FormProvider>
  );
}

function createTooltip({ code, min }: Currency): string | undefined {
  if (!min) return undefined;
  return code === USD_CODE
    ? "The minimum donation amount is 1 USD"
    : `The minimum donation amount is 1 USD or ${min} ${code.toUpperCase()}`;
}