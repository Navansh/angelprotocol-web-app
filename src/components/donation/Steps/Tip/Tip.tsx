import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Slider from "@radix-ui/react-slider";
import dappLogo from "assets/images/bettergiving-logo.png";
import character from "assets/images/waving-character.png";
import Image from "components/Image/Image";
import { humanize } from "helpers";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { schema, stringNumber } from "schemas/shape";
import { TipStep, setStep, setTip } from "slices/donation";
import { useSetter } from "store/accessors";
import BackBtn from "../common/BackBtn";
import ContinueBtn from "../common/ContinueBtn";

const DEFAULT_PCT = "0.17";

interface ITip {
  pct: string;
  amount: string;
}

type FV = {
  tip: ITip;
};

const tipSchema = schema<ITip>({
  amount: stringNumber(
    (s) => s,
    (n) => n.min(0, "can't be negative")
  ),
});

const shape = schema<FV>({
  tip: tipSchema,
});

export default function Tip({
  details,
  tip: persistedTip,
  format = "pct",
}: TipStep) {
  const dispatch = useSetter();

  const [symbol, amount, decimals = 2] = (() => {
    switch (details.method) {
      case "stripe":
        return [details.currency.code, +details.amount];
      case "daf":
        return ["usd", +details.amount];
      case "stocks":
        return [details.symbol, details.numShares];
      case "crypto":
        return [details.token.symbol, +details.token.amount, 4];
    }
  })();

  const initial: ITip = {
    amount: `${amount * +DEFAULT_PCT}`,
    pct: DEFAULT_PCT,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FV>({
    resolver: yupResolver(shape),
    defaultValues: {
      tip: persistedTip
        ? {
            amount: persistedTip.toString(),
            pct: `${persistedTip / amount}`,
          }
        : initial,
    },
  });
  const {
    field: { value: tip, onChange: onTipChange },
  } = useController<FV, "tip">({ name: "tip", control });

  //if user selects custom, can't go back to %
  const [isPct, setIsPct] = useState(format === "pct");

  return (
    <form
      onSubmit={handleSubmit((v) =>
        dispatch(
          setTip({
            tip: Number(v.tip.amount),
            format: isPct ? "pct" : "amount",
          })
        )
      )}
      className="grid content-start p-4 @md/steps:p-8"
    >
      <BackBtn type="button" onClick={() => dispatch(setStep("splits"))} />
      <h4 className="mt-4 text-lg">
        One-Time Donation to{" "}
        <Image src={dappLogo} className="inline-block h-8 px-1" />
      </h4>
      <p className="text-navy-l1">
        We are completely free, and rely on donations
      </p>

      {isPct && (
        <Slider.Root
          min={0}
          max={1}
          step={0.01}
          value={[Number(tip.pct)]}
          onValueChange={([pct]) =>
            onTipChange({
              amount: humanize(amount * pct, decimals),
              pct,
            })
          }
          className="relative flex items-center select-none touch-none mt-16"
        >
          <Slider.Track className="relative grow rounded-full h-1.5 bg-[#EAECEB]">
            <Slider.Range className="absolute bg-blue-d1 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="flex gap-[2.5px] justify-center items-center w-9 h-5 bg-white border border-[#EAECEB] shadow-lg shadow-black/15 rounded-[6px] relative">
            <span className="w-px h-2.5 bg-[#D9D9D9]" />
            <span className="w-px h-2.5 bg-[#D9D9D9]" />
            <span className="w-px h-2.5 bg-[#D9D9D9]" />
            <div className="absolute -top-9 px-2 py-0.5 rounded text-sm">
              <span className="text-xs uppercase mr-0.5">{symbol}</span>
              <span className="mr-0.5">
                {humanize(tip.amount || "0", decimals)}
              </span>
              <span className="text-navy-l1 text-xs">
                ({(Number(tip.pct) * 100).toFixed(0)}%)
              </span>
            </div>
          </Slider.Thumb>
        </Slider.Root>
      )}
      {isPct && (
        <button
          type="button"
          onClick={() => setIsPct(false)}
          className="justify-self-center text-sm mt-6 underline hover:text-blue"
        >
          Enter custom tip
        </button>
      )}

      {!isPct && (
        <>
          <label className="mb-2 mt-6 font-heading font-semibold">
            Your One-Time Donation Amount
          </label>
          <div
            aria-invalid={!!errors.tip?.amount}
            className="relative field-container field-container-donate grid grid-cols-[1fr_auto] items-center pr-5"
          >
            <input
              type="text"
              value={tip.amount}
              onChange={(e) =>
                onTipChange({
                  amount: e.target.value,
                  pct: +e.target.value / amount,
                })
              }
              placeholder="Enter amount"
            />
            <span className="uppercase text-blue-d1">{symbol}</span>
            <ErrorMessage
              data-error
              className="field-error text-right mt-2"
              errors={errors}
              name="tip.amount"
              as="p"
            />
          </div>
        </>
      )}

      <div className="rounded bg-blue-l5 h-[4.5rem] mt-16 relative">
        <Image src={character} className="absolute left-1 bottom-0" />
        <p className="px-[5.32rem] grid place-items-center text-center h-full text-[0.94rem]">
          Thank you for keeping Better Giving free for everyone!
        </p>
      </div>

      <p className="text-sm text-navy-l1 mt-6">
        Assist us in advancing our mission to connect with global organizations
        and spread our timeless message:{" "}
        <span className="font-medium block">Give today, give forever.</span>
      </p>

      <ContinueBtn type="submit" className="mt-6" />
    </form>
  );
}
