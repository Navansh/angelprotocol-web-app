import { IoMdRefresh } from "react-icons/io";
type Props = {
  lastUpdate: string;
  isLoading: boolean;
  refresh: () => void;
};

export default function Updator({ lastUpdate, isLoading, refresh }: Props) {
  return (
    <div className="flex absolute top-3 right-6 gap-2 text-sm font-body">
      <p className="text-angel-grey italic">
        last update:{" "}
        {new Date(lastUpdate).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <button
        className={`uppercase text-xs text-angel-blue disabled:text-grey-accent ${
          isLoading ? "animate-spin" : ""
        } text-lg rounded-sm font-semibold`}
        disabled={isLoading}
        onClick={refresh}
      >
        <IoMdRefresh />
      </button>
    </div>
  );
}