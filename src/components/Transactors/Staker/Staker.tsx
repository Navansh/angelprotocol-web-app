import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { Props, Values } from "./types";

export default function Staker(props: Props) {
  const methods = useForm<Values>({
    reValidateMode: "onChange",
    defaultValues: {
      amount: "",
      is_stake: !!props.stake,
    },
    resolver: yupResolver(schema),
  });
  return (
    <FormProvider {...methods}>
      <props.Form />
    </FormProvider>
  );
}