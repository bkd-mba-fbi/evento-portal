export type UserSettingEntry = Readonly<{
  href: string;
  label: string;
  img?: string;
  external?: boolean;
}>;

export function userSettingEntries(
  currentLocale = "de"
): ReadonlyArray<UserSettingEntry> {
  const playlist =
    currentLocale === "de"
      ? "PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf"
      : "PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU";

  return [
    { href: "#", label: "Mein Profil" },
    { href: "#", label: "Einstellungen" },
    {
      href: `https://www.youtube.com/playlist?list=${playlist}`,
      label: "Video-Tutorials",
      img: "/icons/external-link.svg",
      external: true,
    },
    { href: "#", label: "Logout", img: "/icons/logout.svg" },
  ];
}
