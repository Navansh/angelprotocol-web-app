import { ImgLink } from "components/ImgEditor";
import { TxPrompt } from "components/Prompt";
import { useModalContext } from "contexts/ModalContext";
import { isEmpty } from "helpers";
import { getPayloadDiff } from "helpers/admin";
import { getFullURL, uploadFiles } from "helpers/uploadFiles";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useLazyProfileQuery } from "services/aws/aws";
import { EndowmentProfileUpdate } from "types/aws";
import { useAdminContext } from "../../Context";
import { useUpdateEndowment } from "../common";
import { FV } from "./types";
import { toProfileUpdate } from "./update";

export default function useEditProfile() {
  const { id } = useAdminContext();
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<FV>();

  const { showModal } = useModalContext();
  const [endowment] = useLazyProfileQuery();
  const updateEndow = useUpdateEndowment();

  const editProfile: SubmitHandler<FV> = async ({ initial, ...fv }) => {
    try {
      /** special case for edit profile: since upload happens prior
       * to tx submission. Other users of useTxSender
       */

      const [bannerUrl, logoUrl, cardImgUrl] = await uploadImgs(
        [fv.image, fv.logo, fv.card_img],
        () => {
          showModal(
            TxPrompt,
            { loading: "Uploading images.." },
            { isDismissible: false }
          );
        }
      );

      const update = toProfileUpdate({
        type: "final",
        data: { ...fv, id },
        urls: { image: bannerUrl, logo: logoUrl, card_img: cardImgUrl },
      });

      const diffs = getPayloadDiff(initial, update);

      if (isEmpty(diffs)) {
        return showModal(TxPrompt, { error: "No changes detected" });
      }

      if (update.slug !== initial.slug) {
        const result = await endowment({ slug: update.slug });

        //endow is found with update.slug
        if (result.isSuccess) {
          return showModal(TxPrompt, {
            error: `Slug "${update.slug}" is already taken`,
          });
        }
      }

      type Cleaned = Partial<EndowmentProfileUpdate>;
      //only include top level keys that appeared on diff
      const cleanUpdate = diffs.reduce<Cleaned>((result, [path]) => {
        const key = path.split(".")[0] as keyof Cleaned;
        return { ...result, [key]: update[key] };
      }, {});

      await updateEndow({ ...cleanUpdate, id });
    } catch (err) {
      showModal(TxPrompt, {
        error: err instanceof Error ? err.message : "Unknown error occured",
      });
    }
  };

  return {
    reset,
    editProfile: handleSubmit(editProfile),
    isSubmitting,
    id,
  };
}

async function uploadImgs(
  imgs: ImgLink[],
  onUpload: () => void
): Promise<string[]> {
  const files = imgs.flatMap((img) => (img.file ? [img.file] : []));
  if (!isEmpty(files)) onUpload();
  const baseURL = await uploadFiles(files, "endow-profiles");
  return imgs.map((img) =>
    img.file && baseURL ? getFullURL(baseURL, img.file.name) : img.publicUrl
  );
}
