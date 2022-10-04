import { useNavigate } from "react-router-dom";
import { OnDonation, Props } from "../types";
import { useModalContext } from "contexts/ModalContext";
import Icon from "components/Icon";
import useDonater from "components/Transactors/Donater/useDonater";
import { appRoutes } from "constants/routes";

export default function Tooltip(
  props: OnDonation & Pick<Props, "isKYCRequired">
) {
  const { closeModal } = useModalContext();
  const navigate = useNavigate();
  const showDonater = useDonater();
  function goToMyDonations() {
    closeModal();
    navigate(appRoutes.donations + `/${props.walletAddr}`);
  }
  return (
    <>
      <h3 className="text-2xl font-bold text-center mt-2">Need tax receipt?</h3>
      {props.isKYCRequired ? (
        <p className="text-amber-600 bg-amber-100 p-3 rounded-md">
          <Icon type="Info" className="inline relative bottom-0.5 mr-2" />
          This charity requires KYC data
        </p>
      ) : (
        <button
          className="text-angel-blue underline hover:text-bright-blue mb-2"
          onClick={() => {
            showDonater(props.donaterProps);
          }}
        >
          No tax receipt needed, thanks*
        </button>
      )}
      <div className="text-center font-light text-sm mb-2">
        *Tax receipts can be requested and amended at any time from your
        <button
          onClick={goToMyDonations}
          className="text-angel-blue inline mx-1 hover:text-bright-blue"
        >
          My donations
        </button>
        table.
      </div>
    </>
  );
}