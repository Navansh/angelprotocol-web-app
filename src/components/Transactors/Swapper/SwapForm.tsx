import { useFormContext } from "react-hook-form";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { useGetter } from "store/accessors";
import { Fee, Commission, SwapRate } from "./Misc";
import Output from "./Output";
import Status from "./Status";
import { Values } from "./types";
import useSwap from "./useSwap";
import Amount from "./Amount";

export default function SwapForm() {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<Values>();
  const swap = useSwap();

  const { form_loading, form_error } = useGetter((state) => state.transaction);
  const is_buy = watch("is_buy");

  function switch_currency() {
    setValue("is_buy", !is_buy);
  }

  return (
    <form
      onSubmit={handleSubmit(swap)}
      className="bg-white grid p-4 rounded-md w-full"
      autoComplete="off"
    >
      <Status />
      <Amount />
      <button
        type="button"
        className="text-blue-accent active:text-angel-blue hover:text-angel-blue justify-self-center my-3"
        onClick={switch_currency}
      >
        <CgArrowsExchangeAltV className="text-3xl" />
      </button>
      <Output />
      <SwapRate />
      <Fee />
      <Commission />
      <button
        disabled={isSubmitting || form_loading || !!form_error}
        className="bg-angel-orange disabled:bg-grey-accent p-1 rounded-md mt-2 uppercase text-md text-white font-bold"
        type="submit"
      >
        {form_loading ? "simulating.." : "swap"}
      </button>
    </form>
  );
}