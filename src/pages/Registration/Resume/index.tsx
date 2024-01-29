import { yupResolver } from "@hookform/resolvers/yup";
import { getSavedRegistrationReference } from "helpers";
import { FormProvider, useForm } from "react-hook-form";
import { object, string } from "yup";
import Form from "./Form";
import { FormValues } from "./types";

export default function Resume({ classes = "" }: { classes?: string }) {
  const methods = useForm<FormValues>({
    defaultValues: {
      reference: getSavedRegistrationReference() || "",
    },
    resolver: yupResolver(
      object({
        reference: string().required("required"),
      })
    ),
  });

  return (
    <FormProvider {...methods}>
      <Form classes={classes} />
    </FormProvider>
  );
}
