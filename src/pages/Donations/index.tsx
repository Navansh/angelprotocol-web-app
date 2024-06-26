import CsvExporter from "components/CsvExporter";
import Icon from "components/Icon";
import QueryLoader from "components/QueryLoader";
import withAuth from "contexts/Auth";
import { isEmpty } from "helpers";
import usePaginatedDonationRecords from "services/aws/usePaginatedDonations";
import { DonationRecord } from "types/aws";
import Filter from "./Filter";
import MobileTable from "./MobileTable";
import NoDonations from "./NoDonations";
import StatusTabs from "./StatusTabs";
import Table from "./Table";

export default withAuth(function Donations({ user }) {
  const queryState = usePaginatedDonationRecords({
    email: user.email,
  });

  const {
    data,
    hasMore,
    isError,
    error,
    isLoading,
    isFetching,
    isLoadingNextPage,
    query,
    loadNextPage,
    onQueryChange,
    setParams,
    status,
    setStatus,
  } = queryState;

  const isLoadingOrError =
    isLoading || isFetching || isLoadingNextPage || isError;

  return (
    <div className="grid grid-cols-[1fr_auto] content-start gap-y-4 lg:gap-y-8 lg:gap-x-3 relative padded-container pt-8 lg:pt-20 pb-20">
      <h1 className="text-3xl max-lg:text-center max-lg:col-span-full max-lg:mb-4">
        My Donations
      </h1>
      <CsvExporter
        aria-disabled={isLoadingOrError || isEmpty(data?.Items ?? [])}
        classes="max-lg:row-start-5 max-lg:col-span-full lg:justify-self-end btn-blue px-8 py-3"
        headers={csvHeaders}
        data={data?.Items || []}
        filename={
          status === "final" ? "donations.csv" : "pending-donations.csv"
        }
      >
        Export to CSV
      </CsvExporter>
      <div className="relative flex gap-x-3 items-center border border-gray-l4 w-full bg-white dark:bg-blue-d6 rounded">
        <Icon
          type="Search"
          size={24}
          className="text-navy-d4 dark:text-navy-l2 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          disabled={isError}
          className="p-3 pl-10 placeholder:text-navy-l1 dark:placeholder:text-navy-l2 bg-transparent w-full outline-none disabled:bg-gray-l3 dark:disabled:bg-navy-d3"
          type="text"
          placeholder="Search donations..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
      <Filter
        isDisabled={isLoading || isLoadingNextPage}
        setParams={setParams}
        asker={user.email}
        classes="max-lg:col-span-full max-lg:w-full"
      />
      <div className="grid col-span-full">
        <StatusTabs status={status} changeStatus={setStatus} />

        <div className="p-5 bg-gray-l6 border border-gray-l4 rounded-b sm:rounded-tr grid">
          <QueryLoader
            queryState={{
              data: data?.Items,
              isLoading,
              isFetching,
              error: error,
              isError: isError,
            }}
            messages={{
              fetching: "Loading donations...",
              loading: "Loading donations...",
              error: "Failed to get donations",
              empty: (
                <NoDonations
                  classes="mt-8 place-self-center col-span-full"
                  status={status}
                />
              ),
            }}
          >
            {(donations) => (
              <div className="grid">
                <Table
                  donations={donations}
                  disabled={isLoadingOrError}
                  hasMore={hasMore}
                  isLoading={isLoadingNextPage}
                  status={status}
                  onLoadMore={loadNextPage}
                  classes="hidden max-lg:mt-4 lg:table"
                />
                <MobileTable
                  donations={donations}
                  disabled={isLoadingOrError}
                  hasMore={hasMore}
                  status={status}
                  isLoading={isLoadingNextPage}
                  onLoadMore={loadNextPage}
                  classes="lg:hidden max-lg:my-4"
                />
              </div>
            )}
          </QueryLoader>
        </div>
      </div>
    </div>
  );
});

const csvHeaders: { key: keyof DonationRecord; label: string }[] = [
  { key: "initAmount", label: "Amount" },
  { key: "initAmountUsd", label: "USD Value" },
  { key: "symbol", label: "Currency" },
  { key: "date", label: "Date" },
  { key: "id", label: "Transaction Hash" },
];
