import { msg } from "@lit/localize";

export type UserSettingItem = Readonly<{
  href: string;
  label: string;
  img?: string;
}>;

export function userSettingItems(
  locale: string
): ReadonlyArray<UserSettingItem> {
  const playlist =
    locale === "de"
      ? "PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf"
      : "PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU";

  return [
    { href: "#", label: msg("Mein Profil") },
    { href: "#", label: msg("Einstellungen") },
    {
      href: `https://www.youtube.com/playlist?list=${playlist}`,
      label: msg("Video-Tutorials"),
      img: "/icons/external-link.svg",
    },
    { href: "#", label: msg("Logout"), img: "/icons/logout.svg" },
  ];
}
