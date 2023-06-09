import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useAdminResources } from "pages/Admin/Guard";
import { useErrorContext } from "contexts/ErrorContext";
import { createTx, encodeTx } from "contracts/createTx/createTx";
import useTxSender from "hooks/useTxSender";
import { isEmpty } from "helpers";
import { getPayloadDiff, getTagPayloads } from "helpers/admin";
import { controllerUpdate } from "./helpers";
import { FormValues } from "./schema";

export default function useSubmit() {
  const {
    id,
    multisig,
    settingsController: settings,
    getWallet,
  } = useAdminResources<"charity">();
  const { handleError } = useErrorContext();
  const {
    formState: { isSubmitting, errors, isValid },
    handleSubmit,
    reset,
    trigger,
  } = useFormContext<FormValues>();
  const sendTx = useTxSender();

  // if this effect is omitted and there are any errors,
  // once form is changed to a valid state the error messages do not disappear
  useEffect(() => {
    if (isValid) {
      trigger();
    }
  }, [isValid, trigger]);

  async function onSubmit({ initial, ...fv }: FormValues) {
    try {
      const update = controllerUpdate(id, fv, settings);
      const diff = getPayloadDiff(initial, update);

      if (isEmpty(Object.entries(diff))) {
        return handleError("No changes detected");
      }

      const wallet = getWallet();
      if (typeof wallet === "function") return wallet();

      const [data, dest, meta] = encodeTx(
        "accounts.update-controller",
        update,
        diff
      );
      const tx = createTx(wallet.address, "multisig.submit-transaction", {
        multisig,
        title: `Update permission settings`,
        description: `Update permission settings for endowment id:${id} by member:${wallet?.address}`,
        destination: dest,
        value: "0",
        data,
        meta: meta.encoded,
      });

      await sendTx({
        content: { type: "evm", val: tx },
        ...wallet.meta,
        tagPayloads: getTagPayloads(wallet.meta.willExecute && meta.id),
      });
    } catch (error) {
      handleError(error);
    }
  }

  return {
    errors,
    isSubmitting,
    reset: () => reset(),
    submit: handleSubmit(onSubmit),
  };
}
