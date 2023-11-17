import { TableProps } from "./types";
import { RegistrationStatus } from "types/aws";
import { HeaderButton } from "components/HeaderButton";
import TableSection, { Cells } from "components/TableSection";
import useSort from "hooks/useSort";
import LoadMoreBtn from "./LoadMoreBtn";

export default function Table({
  donations,
  classes = "",
  disabled,
  isLoading,
  hasMore,
  onLoadMore,
}: TableProps) {
  const { handleHeaderClick, sorted, sortDirection, sortKey } = useSort(
    donations,
    "RegistrationDate"
  );

  return (
    <table
      className={`${classes} w-full text-sm rounded border border-separate border-spacing-0 border-prim`}
    >
      <TableSection
        type="thead"
        rowClass="bg-orange-l6 dark:bg-blue-d7 divide-x divide-prim"
      >
        <Cells
          type="th"
          cellClass="px-3 py-4 text-xs uppercase font-semibold text-left first:rounded-tl last:rounded-tr"
        >
          <HeaderButton
            onClick={handleHeaderClick("OrganizationName")}
            _activeSortKey={sortKey}
            _sortKey="OrganizationName"
            _sortDirection={sortDirection}
          >
            Charity Name
          </HeaderButton>
          <HeaderButton
            onClick={handleHeaderClick("RegistrationDate")}
            _activeSortKey={sortKey}
            _sortKey="RegistrationDate"
            _sortDirection={sortDirection}
          >
            Date Submitted
          </HeaderButton>
          <HeaderButton
            onClick={handleHeaderClick("HqCountry")}
            _activeSortKey={sortKey}
            _sortKey="HqCountry"
            _sortDirection={sortDirection}
          >
            HQ Country
          </HeaderButton>
          <HeaderButton
            onClick={handleHeaderClick("RegistrationStatus")}
            _activeSortKey={sortKey}
            _sortKey="RegistrationStatus"
            _sortDirection={sortDirection}
          >
            Registration Status
          </HeaderButton>
          <span className="flex justify-center">Details</span>
        </Cells>
      </TableSection>
      <TableSection
        type="tbody"
        rowClass="even:bg-orange-l6 dark:odd:bg-blue-d6 dark:even:bg-blue-d7 divide-x divide-prim"
        selectedClass="bg-orange-l5 dark:bg-blue-d4"
      >
        {sorted
          .map((row) => (
            <Cells
              key={row.PK}
              type="td"
              cellClass={`p-3 border-t border-prim max-w-[256px] truncate ${
                hasMore ? "" : "first:rounded-bl last:rounded-br"
              }`}
            >
              <>{row.OrganizationName}</>
              <>{new Date(row.RegistrationDate).toLocaleDateString()}</>
              <>{row.HqCountry}</>
              <td className="text-center">
                <Status status={row.RegistrationStatus} />
              </td>
              <>icon</>
            </Cells>
          ))
          .concat(
            hasMore ? (
              <td
                colSpan={9}
                key="load-more-btn"
                className="border-t border-prim rounded-b"
              >
                <LoadMoreBtn
                  onLoadMore={onLoadMore}
                  disabled={disabled}
                  isLoading={isLoading}
                />
              </td>
            ) : (
              []
            )
          )}
      </TableSection>
    </table>
  );
}

const bg: { [key in RegistrationStatus]: string } = {
  Active: "bg-green",
  "Under Review": "bg-gray-d2",
  Rejected: "bg-red",
  Inactive: "bg-yellow",
};

const text: { [key in RegistrationStatus]: string } = {
  Active: "Approved",
  "Under Review": "Pending",
  Rejected: "Rejected",
  Inactive: "Pending",
};
function Status({ status }: { status: RegistrationStatus }) {
  return (
    <p
      className={`${bg[status]} rounded px-3 py-1 inline-block uppercase text-xs`}
    >
      {text[status]}
    </p>
  );
}
