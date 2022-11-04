import * as Yup from "yup";
import { DonateValues } from "./types";
import { SchemaShape } from "schemas/types";
import { TokenWithAmount as TWA } from "slices/donation";
import { tokenConstraint } from "schemas/number";

type Key = keyof TWA;
type Min = TWA["min_donation_amnt"];
type Bal = TWA["balance"];
const minKey: Key = "min_donation_amnt";
const balKey: Key = "balance";

const tokenShape: SchemaShape<TWA> = {
  amount: Yup.lazy((amount: string) =>
    amount === ""
      ? Yup.string().required("required")
      : tokenConstraint.when([minKey, balKey], (...args: any[]) => {
          const [minAmount, balance, schema] = args as [Min, Bal, any];
          return !!minAmount
            ? schema
                .min(minAmount || 0, `amount must be at least ${minAmount}`)
                .max(balance, "not enough balance")
            : schema.max(balance, "not enough balance");
        })
  ),
};

const shape: SchemaShape<DonateValues> = {
  token: Yup.object().shape(tokenShape),
  //no need to validate split, restricted by slider
};

export const schema = Yup.object().shape(shape);
