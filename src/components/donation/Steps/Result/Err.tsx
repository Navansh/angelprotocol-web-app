import Icon from "components/Icon";
import { appRoutes } from "constants/routes";
import { Link } from "react-router-dom";
import { setStep } from "slices/donation";
import { useSetter } from "store/accessors";

export default function Err({
  classes = "",
  endowId,
}: {
  classes?: string;
  endowId: number;
}) {
  const dispatch = useSetter();

  return (
    <div className={`grid justify-items-center ${classes}`}>
      <div className="bg-red rounded-full aspect-square grid place-items-center mb-8">
        <Icon type="Exclamation" size={45} className="text-white m-5" />
      </div>

      <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-12 text-center">
        Something went wrong!
      </h3>
      <p className="text-center">
        The payment wasn’t processed. Please double check your payment details
        or change your payment method and try again.
      </p>
      <div className="grid sm:grid-cols-2 mt-12 gap-5 w-full sm:w-auto">
        <Link
          to={appRoutes.marketplace + `/${endowId}`}
          className="btn-outline btn-donate w-full px-5 text-center"
        >
          Back to the platform
        </Link>
        <button
          type="button"
          onClick={() => {
            dispatch(setStep("donate-form"));
          }}
          className="w-full btn-blue btn-donate px-5"
        >
          Change payment details
        </button>
      </div>
    </div>
  );
}
