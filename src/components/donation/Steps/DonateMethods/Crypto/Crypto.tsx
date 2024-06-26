import { yupResolver } from "@hookform/resolvers/yup";
import { mumbai, polygon } from "constants/chains";
import { IS_TEST } from "constants/env";
import { FormProvider, useForm } from "react-hook-form";
import { schema, tokenShape } from "schemas/shape";
import { CryptoFormStep } from "slices/donation";
import { object } from "yup";
import { Config } from "../../types";
import Form from "./Form";
import { initToken } from "./constants";
import { DonateValues } from "./types";

type Props = CryptoFormStep & {
  config: Config | null;
};

export default function Crypto({ config, ...state }: Props) {
  const initial: DonateValues = {
    source: config ? "bg-widget" : "bg-marketplace",
    token: initToken,
    chainId: IS_TEST
      ? { label: mumbai.name, value: mumbai.id }
      : { label: polygon.name, value: polygon.id },
  };

  const methods = useForm<DonateValues>({
    values: state.details || initial,
    resolver: yupResolver(
      schema<DonateValues>({
        token: object(tokenShape()),
        //no need to validate split, restricted by slider
      })
    ),
  });
  return (
    <FormProvider {...methods}>
      <Form configFromWidget={config} />
    </FormProvider>
  );
}
