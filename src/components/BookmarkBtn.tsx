import Icon from "components/Icon";
import Tooltip from "components/Tooltip";
import { GENERIC_ERROR_MESSAGE } from "constants/common";
import { useModalContext } from "contexts/ModalContext";
import { PropsWithChildren, useRef, useState } from "react";
import {
  useToggleBookmarkMutation,
  useWalletProfileQuery,
} from "services/aws/aws";
import { EndowmentBookmark } from "types/aws";
import Prompt from "./Prompt";

type Props = PropsWithChildren<Pick<EndowmentBookmark, "endowId">>;

export default function BookmarkBtn({ endowId, children }: Props) {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const {
    data,
    isLoading: isProfileLoading,
    isFetching,
    //FUTURE: wallet is may not be needed to edit bookmarks
  } = useWalletProfileQuery("", {
    skip: true,
  });
  const { showModal } = useModalContext();
  const [toggle, { isLoading: isToggling }] = useToggleBookmarkMutation();

  const isLoading = isProfileLoading || isFetching || isToggling;

  const bookmark = data?.bookmarks?.find((d) => d.endowId === endowId);
  const isBookmarked = bookmark !== undefined;

  async function toogleBookmark() {
    const res = await toggle({
      endowId,
      type: isBookmarked ? "delete" : "add",
      wallet: "", //FUTURE: wallet may not be needed to edit bookmarks
    });

    if ("error" in res) {
      showModal(Prompt, {
        type: "error",
        headline: "Bookmark",
        title: "Failed to save bookmark",
        children: GENERIC_ERROR_MESSAGE,
      });
    }
  }

  return (
    <>
      <Tooltip anchorRef={ref} content="Add to favorites" />
      <button
        ref={ref}
        type="button"
        aria-label="Add to favorites button"
        onClick={toogleBookmark}
        disabled={isLoading}
        className={`flex items-center gap-1 ${
          isBookmarked || isHovered ? "text-red" : ""
        }`}
        onMouseOver={(e) => {
          e.preventDefault();
          setHovered(true);
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          setHovered(false);
        }}
      >
        <Icon
          type={
            isLoading
              ? "Loading"
              : isBookmarked || isHovered
                ? "HeartFill"
                : "HeartOutline"
          }
          className={isLoading ? "animate-spin" : ""}
          size={20}
        />
        {children}
      </button>
    </>
  );
}
