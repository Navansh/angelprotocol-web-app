import ExtLink from "components/ExtLink";
import Icon from "components/Icon";
import { useProfileContext } from "../ProfileContext";
import DonateButton from "./DonateButton";

export default function UrlDonateSection({ className }: { className: string }) {
  const profile = useProfileContext();

  return (
    <div
      className={`flex flex-col items-center justify-end gap-8 w-full xl:flex-row xl:gap-6 ${className}`}
    >
      {profile.url && (
        <span className="flex items-center justify-center gap-2 w-full font-sans font-medium text-sm sm:w-auto sm:text-base">
          <Icon type="Globe" className="h-5 w-5 sm:h-6 sm:w-6" />
          <ExtLink
            href={profile.url}
            title="organization url"
            className="cursor-pointer hover:underline"
          >
            {profile.url.replace(/^https?:\/\//i, "")}
          </ExtLink>
        </span>
      )}

      <DonateButton />
    </div>
  );
}