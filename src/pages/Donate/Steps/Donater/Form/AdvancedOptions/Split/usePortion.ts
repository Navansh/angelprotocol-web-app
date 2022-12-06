import { useFormContext } from "react-hook-form";
import { DonateValues } from "../../../types";
import { humanize } from "helpers";

export default function usePortion(type: string) {
  const isLocked = type === "locked";
  const { watch } = useFormContext<DonateValues>();
  const pctLiqSplit = Number(watch("pctLiquidSplit"));
  const pctLockedSplit: number = 100 - pctLiqSplit;
  const token = watch("token");
  const amount = Number(token.amount);

  const disp_amount = `${token.symbol} ${humanize(
    ((isLocked ? pctLockedSplit : pctLiqSplit) / 100) *
      (isNaN(amount) ? 0 : amount),
    5
  )}`;

  return {
    disp_amount,
    disp_split: isLocked ? pctLockedSplit : pctLiqSplit,
  };
}