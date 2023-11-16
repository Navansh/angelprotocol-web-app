import { ObjectSchema, array, object, string } from "yup";
import { FormValues } from "./types";
import { SchemaShape } from "schemas/types";
import { Country } from "types/components";
import { optionType } from "schemas/shape";
import { requiredString } from "schemas/string";
import { MAX_SDGS } from "constants/unsdgs";

export const MB_LIMIT = 6;

export const schema = object<any, SchemaShape<FormValues>>({
  Website: string().required("required").url("invalid url"),
  UN_SDG: array()
    .min(1, "required")
    .max(MAX_SDGS, `maximum ${MAX_SDGS} selections allowed`),
  HqCountry: object<any, SchemaShape<Country>>({
    name: requiredString,
  }),
  EndowDesignation: optionType({ required: true }),
}) as ObjectSchema<FormValues>;