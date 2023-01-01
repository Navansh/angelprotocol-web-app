import { CW3ConfigValues, FormReviewCW3Config } from "pages/Admin/types";
import Checkbox from "components/Checkbox";
import { FormContainer, Submitter, TextArea, TextPrim } from "components/admin";
import useCreateProposal from "./useCreateProposal";

type CV = CW3ConfigValues<FormReviewCW3Config>;

export default function Form() {
  const { createProposal, isSubmitDisabled, isTime } = useCreateProposal();
  return (
    <FormContainer onSubmit={createProposal}>
      <TextPrim<CV> label="Proposal Title" name="title" required />
      <TextArea<CV> label="proposal description" name="description" required />
      <TextPrim<CV> label="pass threshold ( % )" name="threshold" required />
      <TextPrim<CV>
        label={`voting period (${isTime ? "seconds" : "blocks"})`}
        name="duration"
        required
      />
      <Checkbox<CV>
        name="require_execution"
        classes={{
          container:
            "p-3 text-sm rounded bg-orange-l6 dark:bg-blue-d7 grid items-center border border-gray-l2 dark:border-bluegray",
        }}
      >
        Execution required
      </Checkbox>
      <Submitter type="submit" _classes="mt-4" disabled={isSubmitDisabled}>
        Submit
      </Submitter>
    </FormContainer>
  );
}