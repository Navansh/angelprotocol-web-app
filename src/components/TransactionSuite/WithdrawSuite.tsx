import { MdOutlineClose } from "react-icons/md";

import { useSetModal } from "components/Nodal/Nodal";
import { Step } from "services/transaction/types";
import { useGetter, useSetter } from "store/accessors";
import ErrPop from "./ErrPop";
import Submit from "./Submit";
import Broadcast from "./Broadcast";
import Success from "./Success";
import WithdrawForm from "components/Withdraw/WithdrawForm";
import { setStage } from "services/transaction/transactionSlice";
import { Display } from "./types";

export default function WithdrawSuite(props: { inModal?: true }) {
  const { hideModal } = useSetModal();
  const dispatch = useSetter();
  const { stage } = useGetter((state) => state.transaction);
  const display: Display = {
    [Step.form]: <WithdrawForm />,
    [Step.submit]: <Submit />,
    [Step.broadcast]: <Broadcast />,
    [Step.success]: <Success />,
    [Step.error]: <ErrPop />,
  };

  function close() {
    dispatch(setStage({ step: Step.form, content: null }));
    hideModal();
  }

  return (
    <div
      className={`max-w-md w-full relative ${
        props.inModal ? "bg-white rounded-md pt-8" : ""
      }`}
    >
      {props.inModal && (
        <button
          onClick={close}
          className="absolute right-2 top-2 text-angel-grey hover:text-black"
        >
          <MdOutlineClose />
        </button>
      )}
      {display[stage.step]}
    </div>
  );
}