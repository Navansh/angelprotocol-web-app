import { MouseEventHandler } from "react";
import { RegistrationStatus } from "types/aws";
import { steps } from "pages/Registration/routes";
import Icon from "components/Icon";
import { BtnPrim, BtnSec, LoadText } from "components/registration";
import { useRegState } from "../StepGuard";

type Props = {
  isSubmitting: boolean;
  status: Exclude<RegistrationStatus, "Active">;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
  endowId?: number;
  classes?: string;
};

export default function EndowmentStatus({
  onSubmit,
  status,
  isSubmitting,
  classes = "",
}: Props) {
  const { data } = useRegState<4>();

  switch (status) {
    case "Rejected":
      return (
        <div className={`max-sm:grid text-red dark:text-red-l3 ${classes}`}>
          <p className="mb-6 max-sm:grid justify-items-center gap-2">
            <Icon
              type="Info"
              className="inline relative bottom-px mr-2"
              size={20}
            />
            <span className="max-sm:text-center">
              Your endowment application has been rejected.
            </span>
          </p>
          <BtnPrim
            onClick={onSubmit}
            disabled={isSubmitting}
            className="min-w-[8rem]"
          >
            <LoadText isLoading={isSubmitting}>Resubmit</LoadText>
          </BtnPrim>
        </div>
      );

    case "Under Review":
      return (
        <div
          className={`max-sm:grid justify-items-center gap-2 text-gray-d1 dark:text-gray ${classes}`}
        >
          <Icon
            type="HourglassSplit"
            className="relative bottom-px inline mr-2"
          />
          <span className="max-sm:text-center">
            Your application has been submitted for review
          </span>
        </div>
      );

    default:
      return (
        <div className={`grid grid-cols-2 sm:flex gap-2 ${classes}`}>
          <BtnSec
            aria-disabled={isSubmitting}
            as="link"
            to={`../${steps.wallet}`}
            state={data.init}
            className="py-3 min-w-[8rem] text-center"
          >
            Back
          </BtnSec>
          <BtnPrim
            disabled={isSubmitting}
            onClick={onSubmit}
            className="py-3 min-w-[8rem] text-center"
          >
            <LoadText isLoading={isSubmitting}>Continue</LoadText>
          </BtnPrim>
        </div>
      );
  }
}