import { SummaryStep, setDonor, setStep } from "slices/donation";
import { useGetter, useSetter } from "store/accessors";
import { userIsSignedIn } from "types/auth";
import { currency } from "../common/Currency";
import SummaryContainer from "../common/Summary";
import { token } from "../common/Token";
import DonorForm from "./DonorForm";

export default function Summary({
  details,
  liquidSplitPct,
  donor,
  tip,
  recipient,
}: SummaryStep) {
  const dispatch = useSetter();
  const user = useGetter((state) => state.auth.user);

  const [amount, Amount] = (() => {
    switch (details.method) {
      case "crypto": {
        return [+details.token.amount, token(details.token.coingecko_denom)];
      }
      //stocks skips summary (straight to submit), as donor info is not saved in DB
      case "stocks": {
        const { numShares, symbol } = details;
        return [numShares, currency({ code: symbol, rate: null })];
      }
      default:
        return [+details.amount, currency(details.currency)];
    }
  })();

  return (
    <SummaryContainer
      classes="grid content-start p-4 @md:p-8"
      Amount={Amount}
      amount={amount}
      splitLiq={liquidSplitPct}
      onBack={() => dispatch(setStep("tip"))}
      tip={
        tip
          ? {
              value: tip,
              charityName: recipient.name,
            }
          : undefined
      }
    >
      <DonorForm
        donor={
          donor ||
          (userIsSignedIn(user)
            ? {
                lastName: user.lastName ?? "",
                firstName: user.firstName ?? "",
                email: user.email,
              }
            : undefined)
        }
        onSubmit={(donor) => dispatch(setDonor(donor))}
        classes="mt-6"
      />
    </SummaryContainer>
  );
}
