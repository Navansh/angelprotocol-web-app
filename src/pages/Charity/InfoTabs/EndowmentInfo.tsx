import toCurrency from "helpers/toCurrency";
import { useRouteMatch } from "react-router-dom";
import { useProfileState } from "services/aws/endowments/states";
import ancIcon from "assets/images/anchor_protocol.png";
import { CharityParam } from "../types";

export function EndowmentInfo() {
  const { params } = useRouteMatch<CharityParam>();
  const { profileState } = useProfileState(params.address);
  const accountDetails = [
    {
      type: "Current Account",
      balance: `$${toCurrency(profileState.total_liq)}`,
      strategy: "Anchor Protocol",
      allocation: "100%",
      color: "bg-green-400",
    },
    {
      type: "Principal Account",
      balance: `$${toCurrency(profileState.total_lock)}`,
      strategy: "Anchor Protocol",
      allocation: "100%",
      color: "bg-orange",
    },
  ];

  return (
    <div className="w-full lg:min-h-1/2 lg:mt-5 text-left mt-10 font-heading">
      <div className="flex flex-col gap-5 justify-between items-center min-h-r15 w-full bg-transparent shadow-none border-0 rounded-2xl mb-5">
        <div className="endowment_stats bg-white w-full min-h-r15 shadow-xl border-0 rounded-2xl p-5">
          <p className="uppercase font-bold text-thin-blue text-xl">
            Endowment Balance
          </p>
          <p className="uppercase font-bold text-thin-blue text-6xl my-5">
            ${toCurrency(profileState.overall)}
          </p>
          {/*          <p className="uppercase font-bold text-thin-blue text-sm">
            Total donations
          </p>
          <p className="uppercase font-bold text-thin-blue text-3xl">154</p>*/}
        </div>
        {/* <div className="endowment_graph flex-grow bg-blue-100 hidden lg:block">
          <p className="text-center">Charts</p>

        </div> */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          {accountDetails.map((account, i) => (
            <AccountInfo
              key={i}
              account={account}
              className={`${account.color}`}
            />
          ))}
        </div>
      </div>
      {/* <AccountAction /> turn on for admin features after V1 */}
    </div>
  );
}

type Props = { className: string; account: any };
export function AccountInfo(props: Props) {
  return (
    <div
      className={`w-full lg:max-w-600 lg:w-3/4 min-h-r15 shadow-xl border-0 rounded-2xl p-5 ${props.className}`}
    >
      <p className="uppercase font-semibold text-white text-xl">
        {props.account.type}
      </p>
      <p className="uppercase font-bold text-white text-5xl my-5 tracking-wide">
        {props.account.balance}
      </p>
      <div className="flex justify-between w-30 h-16">
        <div className="flex flex-col items-start justify-around">
          <p className="uppercase font-bold text-white text-md">Strategy</p>
          <p className="uppercase font-normal text-white text-sm tracking-wide flex flex-row items-center gap-2">
            <img
              src={ancIcon}
              alt="anchor protocol icon"
              className="h-6 w-6 rounded-xl inline-block"
            />{" "}
            {props.account.strategy}
          </p>
        </div>
        <div className="flex flex-col items-start justify-around">
          <p className="uppercase font-bold text-white text-md">Allocation</p>
          <p className="uppercase font-normal text-white text-sm">
            {props.account.allocation}
          </p>
        </div>
      </div>
    </div>
  );
}