import { msg } from "@lit/localize";
import { buildUrl } from "./routing";

export type UserSettingsItem = Readonly<{
  key: string;
  label: string;
  href: string;
  img?: string;
  external?: boolean;
}>;

export function userSettingsItems(
  locale: string
): ReadonlyArray<UserSettingsItem> {
  return [
    {
      key: "myProfile",
      label: msg("Mein Profil"),
      href: buildUrl("myProfile"),
    },
    {
      key: "mySettings",
      label: msg("Einstellungen"),
      href: buildUrl("mySettings"),
    },
    {
      key: "videos",
      label: msg("Video-Tutorials"),
      href:
        locale === "de-CH"
          ? "https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf"
          : "https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",
      img: "/icons/external-link.svg",
      external: true,
    },
    {
      key: "logout",
      label: msg("Logout"),
      href: "#",
      img: "/icons/logout.svg",
    },
  ];
}
