import { yupResolver } from "@hookform/resolvers/yup";
import CurrencySelector from "components/CurrencySelector";
import { Field, Form as FormContainer } from "components/form";
import { useController, useForm } from "react-hook-form";
import { schema, stringNumber } from "schemas/shape";
import { requiredString } from "schemas/string";
import { useFiatCurrenciesQuery } from "services/apes";
import { setDetails } from "slices/donation";
import { useSetter } from "store/accessors";
import { Currency } from "types/components";
import ContinueBtn from "../../common/ContinueBtn";
import Frequency from "./Frequency";
import { FormValues as FV, Props } from "./types";

const USD_CODE = "usd";

export default function Form({ widgetConfig, details }: Props) {
  const dispatch = useSetter();

  const currencies = useFiatCurrenciesQuery();

  const initial: FV = {
    source: widgetConfig ? "bg-widget" : "bg-marketplace",
    amount: "",
    currency: { code: USD_CODE, min: 1, rate: 1 },
    frequency: "",
  };

  const currencyKey: keyof FV = "currency";
  const methods = useForm<FV>({
    defaultValues: details || initial,
    resolver: yupResolver(
      schema<FV>({
        frequency: requiredString,
        amount: stringNumber(
          (s) => s.required("Please enter an amount"),
          (n) =>
            n
              .positive("Amount must be greater than 0")
              .when(currencyKey, (values, schema) => {
                const [currency] = values as [Currency | undefined];
                return currency?.min
                  ? schema.min(currency.min, "less than min")
                  : schema;
              })
        ),
      })
    ),
  });
  const { control, handleSubmit } = methods;

  const {
    field: { value: currency, onChange: onCurrencyChange },
  } = useController<FV, "currency">({
    control: control,
    name: "currency",
  });

  return (
    <FormContainer
      methods={methods}
      onSubmit={handleSubmit((fv) => {
        dispatch(
          setDetails({
            ...fv,
            frequency: fv.frequency as Exclude<FV["frequency"], "">, //validated by schema
            method: "stripe",
          })
        );
      })}
      className="grid gap-4"
    >
      <Frequency />
      <CurrencySelector
        currencies={currencies}
        label="Currency"
        onChange={onCurrencyChange}
        value={currency}
        classes={{
          label: "font-semibold",
          combobox: "field-container-donate rounded-lg",
          container: "field-donate",
        }}
        required
      />
      <Field<FV>
        name="amount"
        label="Donation amount"
        placeholder="Enter amount"
        classes={{ label: "font-semibold", container: "field-donate" }}
        required
        // validation must be dynamicly set depending on which exact currency is selected
        tooltip={createTooltip(currency)}
      />

      <p className="text-sm dark:text-navy-l2 mt-4">
        Please click the button below and follow the instructions provided to
        complete your donation
      </p>

      <ContinueBtn className="mt-2" type="submit" />
    </FormContainer>
  );
}

function createTooltip({ code, min }: Currency): string | undefined {
  if (!min) return undefined;
  return code === USD_CODE
    ? "The minimum donation amount is 1 USD"
    : `The minimum donation amount is 1 USD or ${min} ${code.toUpperCase()}`;
}
