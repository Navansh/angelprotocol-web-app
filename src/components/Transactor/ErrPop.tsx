import { useEffect } from "react";
import { ErrorStage } from "slices/transaction/types";
import { useErrorContext } from "contexts/ErrorContext";
import { useModalContext } from "contexts/ModalContext";
import Icon from "components/Icon";
import { useSetter } from "store/accessors";
import { setStage } from "slices/transaction/transactionSlice";
import { getTxUrl } from "helpers";

export default function ErrPop(props: ErrorStage) {
  const dispatch = useSetter();
  const { closeModal } = useModalContext();
  const { chainId, message, txHash } = props;
  const { handleError } = useErrorContext();

  useEffect(() => {
    if (props.step !== "error") {
      handleError("wrong component rendered");
    }
  }, [props.step, handleError]);

  function acknowledge() {
    dispatch(setStage({ step: "initial" }));
    closeModal();
  }

  if (props.step !== "error") {
    return null;
  }

  return (
    <div className="bg-white-grey grid p-4 rounded-md w-full shadow-lg min-h-[15rem] content-center place-items-center">
      <Icon type="Info" className="text-angel-grey text-2xl mb-2" />
      <p className="text-center text-angel-grey mb-2 ">{message}</p>
      {chainId && txHash && (
        <a
          href={getTxUrl(chainId, txHash)}
          target="_blank"
          rel="noreferrer noopener"
          className="text-center text-red-400 cursor-pointer mb-6 text-sm"
        >
          view transaction details
        </a>
      )}
      <button
        onClick={acknowledge}
        className="bg-angel-orange text-white rounded-md uppercase py-1 px-4 mt-4"
      >
        ok
      </button>
    </div>
  );
}