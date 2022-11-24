import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { SchemaShape } from "schemas/types";
import Checkbox from "components/Checkbox";
import ExtLink from "components/ExtLink";
import { TextInput, checkBoxStyle } from "components/registration";
import { BtnPrim, BtnSec } from "components/registration";
import OrSeparator from "components/registration/OrSeparator";
import { PRIVACY_POLICY } from "constants/urls";
import { routes } from "./routes";

type FormValues = { email: string; hasAgreedToPrivacyPolicy: boolean };

export default function Signup({ classes = "" }: { classes?: string }) {
  const methods = useForm<FormValues>({
    resolver: yupResolver(
      Yup.object().shape<SchemaShape<FormValues>>({
        email: Yup.string().required("required").email("invalid email"),
        hasAgreedToPrivacyPolicy: Yup.boolean().oneOf(
          [true],
          "must agree to privacy policy"
        ),
      })
    ),
  });

  const { handleSubmit } = methods;

  function onSubmit({ email }: FormValues) {
    alert(email);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${classes} padded-container w-full max-w-[37.5rem] my-20 grid`}
    >
      <h3 className="text-3xl font-bold text-center">
        Register to Angel Protocol
      </h3>
      <FormProvider {...methods}>
        <TextInput<FormValues>
          name="email"
          label="E-mail"
          placeholder="e.g. johndoe@example.com"
          classes={{ container: "mt-8 mx-0 sm:mx-24" }}
        />
        <Checkbox<FormValues>
          required
          name="hasAgreedToPrivacyPolicy"
          classes={{
            container: "justify-self-center mt-6 mb-8 text-xs",
            checkbox: checkBoxStyle,
            error: "mt-2",
          }}
        >
          I declare that I have read and agreed to{" "}
          <ExtLink className="underline text-orange" href={PRIVACY_POLICY}>
            Privacy Policy
          </ExtLink>
        </Checkbox>
      </FormProvider>
      <BtnPrim type="submit" className="mt-8 mx-0 sm:mx-24">
        Register
      </BtnPrim>
      <OrSeparator classes="my-11" />
      <BtnSec as="link" className="mx-0 sm:mx-24" to={routes.resume}>
        Resume your registration
      </BtnSec>
    </form>
  );
}