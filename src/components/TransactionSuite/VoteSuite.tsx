import { ReactNode } from "react";
import { useGetter, useSetter } from "store/accessors";
import ErrPop from "./ErrPop";
import Submit from "./Submit";
import Broadcast from "./Broadcast";
import Success from "./Success";
import { MdOutlineClose } from "react-icons/md";
import { useSetModal } from "components/Nodal/Nodal";
import { setStage } from "services/transaction/transactionSlice";
import { Step } from "services/transaction/types";
import VoterForm from "components/Voter/VoterForm";

type Display = { [key in Step]: ReactNode };

export default function VoteSuite(props: { inModal?: true }) {
  const { hideModal } = useSetModal();
  const dispatch = useSetter();

  function close() {
    dispatch(setStage({ step: Step.form, content: null }));
    hideModal();
  }

  const { stage } = useGetter((state) => state.transaction);
  const display: Display = {
    [Step.form]: <VoterForm />,
    [Step.submit]: <Submit />,
    [Step.broadcast]: <Broadcast />,
    [Step.success]: <Success />,
    [Step.error]: <ErrPop />,
  };
  return (
    <div
      className={`max-w-md w-full relative ${
        props.inModal ? "bg-white rounded-md pt-4" : ""
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