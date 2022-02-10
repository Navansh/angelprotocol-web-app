import toCurrency from "helpers/toCurrency";

export default function Balance(props: { amount: number; title: string }) {
  return (
    <p className="text-angel-grey text-xs font-light font-heading flex items-center justify-end">
      <span className="mr-1 text-xs">{props.title}</span>
      <span>{toCurrency(props.amount, 3, true)} HALO</span>
    </p>
  );
}