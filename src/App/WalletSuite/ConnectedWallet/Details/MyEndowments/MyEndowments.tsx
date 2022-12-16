import { EndowmentBookmark } from "types/aws";
import Logo from "../Logo";
import Links from "./Links";

type Props = { endowments: EndowmentBookmark[] };

export default function MyEndowments({ endowments }: Props) {
  return (
    <div className="grid p-4 gap-3 border-b border-gray-l2 dark:border-bluegray">
      <h3 className="font-heading font-bold text-sm text-gray-d1 dark:text-gray">
        My Endowments
      </h3>
      {endowments.map((endowment) => (
        <div key={endowment.id} className="grid grid-cols-[auto_1fr] gap-3">
          <Logo src={endowment.logo} className="w-10 h-10" />

          <div className="grid items-center">
            <Name value={endowment.name} />
            <Links endowmentId={endowment.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

const Name = ({ value }: { value: string }) => (
  <span className="font-heading font-semibold text-sm">{value}</span>
);