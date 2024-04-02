import { BYTES_IN_MB } from "constants/common";
import { fileDropzoneAssetShape } from "schemas/file";
import { alphanumeric, requiredString } from "schemas/string";
import { SchemaShape } from "schemas/types";
import { MIMEType } from "types/lists";
import { ObjectSchema, object } from "yup";
import { FormValues } from "./types";

export const MB_LIMIT = 6;

export const VALID_MIME_TYPES: MIMEType[] = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "image/webp",
];

const assetShape = fileDropzoneAssetShape(
  MB_LIMIT * BYTES_IN_MB,
  VALID_MIME_TYPES,
  true
);

export const schema = object<any, SchemaShape<FormValues>>({
  RegistrationNumber: requiredString.matches(
    alphanumeric,
    "must only contain numbers and letters"
  ),
  ProofOfIdentity: assetShape,
  ProofOfRegistration: assetShape,
  LegalEntityType: requiredString.trim(),
  ProjectDescription: requiredString
    .trim()
    .max(4000, "maximum 4000 characters allowed"),
}) as ObjectSchema<FormValues>;
