// import { ConnectType } from "@terra-money/wallet-provider";
import { icons } from "components/WalletSuite/Icon";
import { Connectors, Icons } from "components/WalletSuite/types";
import useAction from "./useAction";

type Props = { type: Connectors; label: string; icon: Icons };
export default function Action(props: Props) {
  const { handleConnect, isLoading } = useAction(props.type, props.icon);
  return (
    <button
      disabled={isLoading}
      onClick={handleConnect}
      className={`transform active:translate-x-1 disabled:bg-thin-grey bg-white text-angel-grey hover:bg-angel-blue hover:text-white flex items-center gap-2 rounded-full items-center p-1 pr-4 shadow-md`}
    >
      <img
        src={icons[props.icon]}
        className="w-8 h-8 p-1.5 bg-white-grey rounded-full shadow-md"
        alt=""
      />
      <p className="uppercase text-sm">{props.label}</p>
    </button>
  );
}
