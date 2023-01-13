import { Link } from "react-router-dom";
import { AP_ID, REVIEWER_ID, useIsMemberQuery } from "services/juno/custom";
import { ConnectedWallet } from "contexts/WalletContext";
import { chainIds } from "constants/chains";
import { appRoutes } from "constants/routes";

export default function AdminLinks(props: ConnectedWallet) {
  const {
    data: isApMember = false,
    isLoading: isApLoading,
    isFetching: isApFetching,
  } = useIsMemberQuery(
    { user: props.address, endowmentId: `${AP_ID}` },
    { skip: props.chainId !== chainIds.juno }
  );
  const {
    data: isReviewMember = false,
    isLoading: isReviewLoading,
    isFetching: isReviewFetching,
  } = useIsMemberQuery(
    { user: props.address, endowmentId: `${REVIEWER_ID}` },
    { skip: props.chainId !== chainIds.juno }
  );

  const isLoading =
    isApLoading || isApFetching || isReviewLoading || isReviewFetching;

  if (isLoading || !isApMember || !isReviewMember) return null;

  return (
    <div className="grid p-4 gap-3 border-b border-gray-l2 dark:border-bluegray">
      <h3 className="font-heading font-bold text-sm text-gray-d1 dark:text-gray">
        Platform Administration
      </h3>
      <div className="flex items-center uppercase font-heading font-semibold text-xs underline underline-offset-2">
        {isApMember && (
          <Link
            to={`${appRoutes.admin}/${AP_ID}`}
            className="pr-2 text-orange hover:text-orange-l2 decoration-1 hover:decoration-2"
          >
            ap admin
          </Link>
        )}
        {isReviewMember && (
          <Link
            to={`${appRoutes.admin}/${REVIEWER_ID}`}
            className="pl-2 border-l border-gray-l2 dark:border-bluegray text-orange hover:text-orange-l2 decoration-1 hover:decoration-2"
          >
            applications
          </Link>
        )}
      </div>
    </div>
  );
}