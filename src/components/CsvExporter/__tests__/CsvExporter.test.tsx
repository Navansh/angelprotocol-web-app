// @vitest-environment happy-dom
import { renderIntoDocument } from "react-dom/test-utils";
import { describe, expect, test, vi } from "vitest";
import CsvExporter from "../CsvExporter";

const mockChildComponent = vi.fn();
vi.mock("react-csv", () => ({
  CSVLink: (props: any) => {
    mockChildComponent(props);
    return <div>mock</div>;
  },
}));

describe("CsvExporter tests", () => {
  test("downloads the file with provided name", async () => {
    const headers = [
      { key: "key1", label: "Key1" },
      { key: "key2", label: "Key2" },
    ];
    const data = [
      { key1: "value11", key2: "value12" },
      { key1: "value21", key2: "value22" },
    ];
    const filename = "testfile.csv";
    renderIntoDocument(
      <CsvExporter data={data} headers={headers} filename={filename}>
        Save
      </CsvExporter>
    );
    expect(mockChildComponent).toHaveBeenCalledWith(
      expect.objectContaining({ data, filename, headers })
    );
  });
});
