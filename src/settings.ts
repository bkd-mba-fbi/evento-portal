export type SettingsApp = { readonly key: string; readonly scope: string };

export type Settings = Readonly<{
  oauth: { readonly server: string; readonly clientId: string };
  apps: ReadonlyArray<Readonly<SettingsApp>>;
}>;

export const settings: Settings = {
  oauth: {
    server: "https://eventoapp-test.erz.be.ch",
    clientId: "dev3000",
  },
  apps: [
    {
      key: "schulverwaltung",
      scope: "Tutoring",
      // root: "Apps/webapp-schulverwaltung/index.html",
    },
    {
      key: "anmeldedetailsEinlesen",
      scope: "NG",
      // root: "Apps/EmberApps/AnmeldedetailsEinlesen/index.html",
    },
    {
      key: "schulleiterPersonen",
      scope: "NG",
      // root: "Apps/EmberApps/SchulleiterPersonen/index.html",
    },
    {
      key: "kursausschreibung",
      scope: "Public",
      // root: "Apps/Kursausschreibung/index.html",
    },
    {
      key: "stellvertretung",
      scope: "Tutoring",
      // root: "Apps/Stellvertretung/index.html",
    },
    {
      key: "reservation",
      scope: "NG",
      // root: "Apps/Raumreservation/index.html",
    },
  ],
};
