import { ObjectSchema, object } from "yup";
import { FundCreatorValues } from "pages/Admin/types";
import { SchemaShape } from "schemas/types";
import { futureDate } from "schemas/date";
import { requiredPositiveNumber } from "schemas/number";
import { requiredContractAddr, stringByteSchema } from "schemas/string";
import { proposalShape } from "../../../../constants";

export const schema = object<any, SchemaShape<FundCreatorValues>>({
  ...proposalShape,
  newFundAddr: requiredContractAddr,
  fundName: stringByteSchema(4, 64),
  fundDescription: stringByteSchema(4, 1064),
  expiryTime: futureDate,
  expiryHeight: requiredPositiveNumber,
}) as ObjectSchema<FundCreatorValues>;
