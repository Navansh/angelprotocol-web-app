import { ErrorMessage } from "@hookform/error-message";
import { FileDropzoneAsset } from "types/components";
import ExtLink from "components/ExtLink";
import Icon from "components/Icon";
import { isEmpty } from "helpers";

const filesKey: keyof FileDropzoneAsset = "files";

export default function DropzoneText({
  formErrors,
  fieldName,
  files,
  previews,
}: FileDropzoneAsset & { fieldName: string; formErrors: any }) {
  const isFilesEmpty = isEmpty(files);
  const isPreviewsEmpty = isEmpty(previews);

  if (isFilesEmpty && isPreviewsEmpty) {
    return (
      <span className="grid justify-items-center text-sm text-gray-d1 dark:text-gray">
        <Icon type="FileUpload" size={24} className="mb-[1.125rem]" />
        <p className="font-semibold mb-1">Upload file</p>
        <span>Click to Browse or Drag &amp; Drop</span>
      </span>
    );
  }

  if (isFilesEmpty) {
    return (
      <div>
        {previews.map(({ name, publicUrl }) => (
          <ExtLink
            onClickCapture={(ev) => ev.stopPropagation()}
            key={name}
            href={publicUrl}
            className="text-sm block text-blue hover:text-blue-l1"
          >
            {name}
          </ExtLink>
        ))}
      </div>
    );
  }

  return (
    <div>
      {files.map(({ name }, i) => (
        <p key={name}>
          <label className="text-sm">{name}</label>
          <ErrorMessage
            errors={formErrors}
            name={`${fieldName}.${filesKey}.${i}`}
            as="span"
            className="text-red dark:text-red-l2 text-xs before:content-['-'] before:mx-1"
          />
        </p>
      ))}
    </div>
  );
}