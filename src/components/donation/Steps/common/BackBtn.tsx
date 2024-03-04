import { ButtonHTMLAttributes } from "react";
import Icon from "../../../Icon";

export default function BackBtn({
  className,
  ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">) {
  return (
    <button
      {...props}
      className={`flex items-center gap-1 font-semibold text-blue hover:text-blue-l1 active:text-blue-d1 disabled:text-gray-l3 aria-disabled:text-gray-l3 ${className}`}
    >
      <Icon type="ArrowBack" strokeWidth={20} />
      <span>Back</span>
    </button>
  );
}