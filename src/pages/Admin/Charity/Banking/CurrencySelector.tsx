import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { WiseCurrency } from "types/aws";
import { DrawerIcon } from "components/Icon";
import { isEmpty } from "helpers";

export type Currency = {
  code: string;
  name: string;
};

type Props = {
  value: Currency;
  currencies: Currency[];
  onChange: (currency: Currency) => void;
};

export default function CurrencySelector(props: Props) {
  const [query, setQuery] = useState("");

  const filteredCurrencies =
    query === ""
      ? props.currencies
      : props.currencies.filter((currency) => {
          // check whether query matches either the currency name or any of its keywords
          const formatQuery = query.toLowerCase().replace(/\s+/g, ""); // ignore spaces and casing
          const matchesCode = currency.code.toLowerCase().includes(formatQuery);
          const matchesName = currency.name
            .toLowerCase()
            .replace(/\s+/g, "") // ignore spaces and casing
            .includes(formatQuery);

          return matchesCode || matchesName;
        });

  return (
    <div className="grid gap-2">
      <span>Select the currency to receive your funds in</span>
      <Combobox
        value={props.value}
        onChange={props.onChange}
        as="div"
        className="relative items-center grid grid-cols-[1fr_auto] w-full field-container"
      >
        <Combobox.Input
          className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          displayValue={(currency: WiseCurrency) => currency.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Button className="flex items-center pr-2">
          {({ open }) => (
            <DrawerIcon
              isOpen={open}
              size={25}
              className="h-full w-full text-gray-400"
              aria-hidden="true"
            />
          )}
        </Combobox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute top-full mt-2 z-10 w-full bg-white dark:bg-blue-d6 shadow-lg rounded overflow-y-scroll scroller text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {isEmpty(filteredCurrencies) ? (
              <div className="p-2 text-sm cursor-default">Nothing found</div>
            ) : (
              filteredCurrencies.map((currency) => (
                <Combobox.Option key={currency.code} value={currency}>
                  {({ active, selected }) => (
                    <div
                      className={`${
                        active ? "bg-blue-l2 dark:bg-blue-d1" : ""
                      } ${
                        selected ? "font-semibold" : "font-normal"
                      } flex items-center gap-2 p-2 text-sm cursor-pointer truncate`}
                    >
                      {currency.name}
                    </div>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}