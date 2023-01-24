import { BtnLink, BtnLinkProps } from "components/BtnLink";

export function BtnSec({ className = "", ...props }: BtnLinkProps) {
  return (
    <BtnLink
      {...props}
      className={`${className}bg-orange-l5 dark:bg-blue-d4 hover:bg-orange-l4 dark:hover:bg-blue-d3 text-sm md:text-base p-3 rounded border border-prim text-center hover:border-gray-l1 hover:dark:border-blue-d2 font-bold font-body`}
    />
  );
}
