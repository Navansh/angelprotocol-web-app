import { Popover } from "@headlessui/react";
import Icon from "components/Icon";
import { DateInput } from "components/form";
import { FC, FormEventHandler } from "react";
import { FormValues as FV } from "./types";

// import CurrencyDropdown from "./CurrencyDropdown";
// import NetworkDropdown from "./NetworkDropdown";

type Props = {
  submit: FormEventHandler<HTMLFormElement>;
  onReset: FormEventHandler<HTMLFormElement>;
  classes?: string;
};

const Form: FC<Props> = ({ onReset, submit, classes = "" }) => {
  return (
    <Popover.Panel
      as="form"
      onSubmit={submit}
      onReset={onReset}
      className={`${classes} grid content-start gap-4 w-full rounded border border-gray-l4 bg-white dark:bg-blue-d5 max-lg:pb-6 max-lg:shadow-lg`}
    >
      <div className="lg:hidden relative text-[1.25rem] px-4 py-3 -mb-4 font-bold uppercase">
        <span className="text-blue-d1">Filters</span>
        <Popover.Button className="absolute top-1/2 -translate-y-1/2 right-2">
          <Icon type="Close" size={33} />
        </Popover.Button>
      </div>

      <div className="grid gap-x-[1.125rem] grid-cols-2 px-4 lg:px-6 lg:pt-6">
        <label className="col-span-full text-sm mb-2">Date</label>
        <DateInput<FV> name="startDate" />
        <DateInput<FV> name="endDate" />
      </div>

      {/*<NetworkDropdown classes="px-4 lg:px-6" />*/}
      {/*<CurrencyDropdown classes="px-4 lg:px-6" />*/}

      <div className="max-lg:row-start-2 flex gap-x-4 items-center justify-between max-lg:px-4 max-lg:py-3 p-6 lg:mt-2 bg-blue-l5 dark:bg-blue-d7 border-y lg:border-t border-gray-l4">
        <h3 className="uppercase lg:hidden">Filter by</h3>
        <button
          type="reset"
          className="text-blue-d1 underline text-sm max-lg:ml-auto"
        >
          Reset filters
        </button>
        <button
          type="submit"
          className="btn btn-blue px-6 py-2 rounded-sm text-xs font-bold uppercase"
        >
          Submit
        </button>
      </div>
    </Popover.Panel>
  );
};

export default Form;
