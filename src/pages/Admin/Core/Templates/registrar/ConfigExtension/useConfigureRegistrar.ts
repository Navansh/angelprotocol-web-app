import { useFormContext } from "react-hook-form";
import {
  RegistrarConfigExtensionValues as RV,
  RegistrarConfigUpdateMeta,
} from "pages/Admin/types";
import { RegistrarConfigExtensionPayload as RP } from "types/contracts";
import { useAdminResources } from "pages/Admin/Guard";
import { useModalContext } from "contexts/ModalContext";
import { useGetWallet } from "contexts/WalletContext";
import Popup from "components/Popup";
import CW3 from "contracts/CW3";
import Registrar from "contracts/Registrar";
import useCosmosTxSender from "hooks/useCosmosTxSender/useCosmosTxSender";
import { genDiffMeta, getPayloadDiff } from "helpers/admin";
import { cleanObject } from "helpers/cleanObject";

type Key = keyof RP;
type Value = RP[Key];
export default function useConfigureRegistrar() {
  const { cw3, propMeta } = useAdminResources();
  const { wallet } = useGetWallet();
  const {
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useFormContext<RV>();
  const { showModal } = useModalContext();
  const sendTx = useCosmosTxSender();

  async function configureRegistrar({
    title,
    description,
    initialConfigPayload,
    ...data //registrarConfig
  }: RV) {
    //check for changes
    const diff = getPayloadDiff(initialConfigPayload, data);
    const diffEntries = Object.entries(diff) as [Key, Value][];
    if (diffEntries.length === 0) {
      showModal(Popup, { message: "no changes detected" });
      return;
    }

    const registrarContract = new Registrar(wallet);
    const configUpdateMsg =
      registrarContract.createEmbeddedConfigExtensionUpdateMsg(
        cleanObject(diff)
      );

    const configUpdateMeta: RegistrarConfigUpdateMeta = {
      type: "reg_config_extension",
      data: genDiffMeta(diffEntries, initialConfigPayload),
    };

    const adminContract = new CW3(wallet, cw3);
    const proposalMsg = adminContract.createProposalMsg(
      title,
      description,
      [configUpdateMsg],
      JSON.stringify(configUpdateMeta)
    );

    await sendTx({
      msgs: [proposalMsg],
      ...propMeta,
    });
  }

  return {
    configureRegistrar: handleSubmit(configureRegistrar),
    isSubmitDisabled: !isDirty || isSubmitting,
  };
}