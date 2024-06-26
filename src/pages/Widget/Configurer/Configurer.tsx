import { yupResolver } from "@hookform/resolvers/yup";
import { LockedSplitSlider } from "components/donation/Steps/Splits";
import { CheckField, Form } from "components/form";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { reset, update } from "slices/widget";
import { useGetter, useSetter } from "store/accessors";
import { EndowmentOption } from "types/aws";
import { WidgetConfig } from "types/widget";
import EndowmentSelector from "./EndowmentSelector";
import { schema } from "./schema";
import { FormValues } from "./types";

type Props = {
  classes?: string;
  endowment?: EndowmentOption;
};

export default function Configurer({ classes = "", endowment }: Props) {
  const widgetInitValues = useGetter((state) => state.widget);
  const dispatch = useSetter();

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      endowment: endowment ?? {
        ...widgetInitValues.endowment,
        name: "", // must set name to "" so that no value is displayed by default in the EndowmentSelector input
      },
      isDescriptionTextShown: widgetInitValues.isDescriptionTextShown,
      splitDisabled: widgetInitValues.splitDisabled,
      liquidPercentage: widgetInitValues.liquidSplitPct,
    },
  });

  const submit: SubmitHandler<FormValues> = async (fv) => {
    const newConfig: WidgetConfig = {
      endowment: fv.endowment,
      isDescriptionTextShown: fv.isDescriptionTextShown,
      splitDisabled: fv.splitDisabled,
      liquidSplitPct: fv.liquidPercentage,
    };
    dispatch(update(newConfig));
  };

  const { handleSubmit, reset: hookFormReset } = methods;

  const {
    field: { onChange, value },
  } = useController({
    control: methods.control,
    name: "liquidPercentage",
  });

  return (
    <Form
      className={`${classes} @container/configurer`}
      methods={methods}
      onSubmit={handleSubmit(submit)}
      onReset={(e) => {
        e.preventDefault();
        dispatch(reset());
        hookFormReset();
      }}
    >
      <h2 className="text-lg @4xl/widget:text-2xl text-center @4xl/widget:text-left mb-3">
        Donation Form Builder
      </h2>

      <div className="grid content-start gap-6 text-sm">
        <label className="-mb-4">Nonprofit name:</label>
        <EndowmentSelector />

        <CheckField<FormValues> name="isDescriptionTextShown">
          Show description text
        </CheckField>

        <label className="-mb-4">Define default split value:</label>
        <LockedSplitSlider
          value={100 - value}
          onChange={(lockedPct) => onChange(100 - lockedPct)}
        />

        <CheckField<FormValues> name="splitDisabled" classes="mt-4">
          Disable changing the split value
        </CheckField>

        <div className="flex gap-3 w-full @max-xl/configurer:justify-center mt-4">
          <button
            type="reset"
            className="btn-outline-filled @max-sm/configurer:mx-auto w-40"
          >
            Reset Changes
          </button>
          <button
            type="submit"
            className="btn-blue @max-sm/configurer:mx-auto w-40"
          >
            Update Snippet
          </button>
        </div>
      </div>
    </Form>
  );
}
