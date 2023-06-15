import { msg } from "@lit/localize";

export type Settings = Readonly<{
  api: Readonly<{ server: string }>;
  oauth: Readonly<{ server: string; clientId: string }>;
  apps: ReadonlyArray<Readonly<App>>;
  navigationHome: NavigationItem;
  navigation: ReadonlyArray<NavigationGroup>;
}>;

export type App = Readonly<{ key: string; scope: string; root: string }>;

export type Navigation = ReadonlyArray<NavigationGroup>;

export type NavigationGroup = Readonly<{
  label: string;
  items: ReadonlyArray<NavigationItem>;
}>;

export type NavigationItem = Readonly<{
  key: string;
  label: string;

  /**
   * The navigation item will only be displayed if the user has any of
   * these roles or permissions. If `null`, the item is visible to all
   * users.
   */
  allowedRolesOrPermissions: ReadonlyArray<string> | null;

  /**
   * The navigation item will be hidden if on any of these
   * instances. If `null`, the item is visible on all instances.
   */
  deniedInstanceIds: ReadonlyArray<string> | null;

  appKey: string;
  appPath: string;
}>;

export const settings: Settings = {
  api: {
    server: "https://eventoapp-test.erz.be.ch/restApi",
  },
  oauth: {
    server: "https://eventoapp-test.erz.be.ch",
    clientId: "dev3000",
  },
  apps: [
    {
      key: "schulverwaltung",
      scope: "Tutoring",
      root: "Apps/webapp-schulverwaltung/index.html",
    },
    {
      key: "anmeldedetailsEinlesen",
      scope: "NG",
      root: "Apps/EmberApps/AnmeldedetailsEinlesen/index.html",
    },
    {
      key: "schulleiterPersonen",
      scope: "NG",
      root: "Apps/EmberApps/SchulleiterPersonen/index.html",
    },
    {
      key: "kursausschreibung",
      scope: "Public",
      root: "Apps/Kursausschreibung/index.html",
    },
    {
      key: "stellvertretung",
      scope: "Tutoring",
      root: "Apps/Stellvertretung/index.html",
    },
    {
      key: "reservation",
      scope: "NG",
      root: "Apps/Raumreservation/index.html",
    },
  ],
  navigationHome: {
    key: "home",
    label: "Home",
    allowedRolesOrPermissions: null,
    deniedInstanceIds: null,
    appKey: "schulverwaltung",
    appPath: "#/portal-home",
  },
  get navigation(): Navigation {
    return [
      {
        label: msg("Unterricht"),
        items: [
          {
            key: "presenceControl",
            label: msg("Präsenzkontrolle"),
            allowedRolesOrPermissions: ["TeacherRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/presence-control",
          },
          {
            key: "currentEvents",
            label: msg("Aktuelle Fächer"),
            allowedRolesOrPermissions: ["TeacherRole", "ClassTeacherRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/current-events",
          },
          {
            key: "tests",
            label: msg("Tests und Bewertung"),
            allowedRolesOrPermissions: ["TeacherRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/tests",
          },
          {
            key: "substitutionsAssign",
            label: msg("Stellvertretung"),
            allowedRolesOrPermissions: ["TeacherRole"],
            deniedInstanceIds: null,
            appKey: "stellvertretung",
            appPath: "#/substitutions/assign",
          },
        ],
      },
      {
        label: msg("Absenzen"),
        items: [
          {
            key: "openAbsences",
            label: msg("Offene Absenzen entschuldigen"),
            allowedRolesOrPermissions: ["TeacherRole", "ClassTeacherRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/open-absences",
          },
          {
            key: "editAbsences",
            label: msg("Absenzen bearbeiten"),
            allowedRolesOrPermissions: [
              "TeacherRole",
              "ClassTeacherRole",
              "AbsenceAdministrator",
            ],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/edit-absences",
          },
          {
            key: "evaluateAbsences",
            label: msg("Absenzen auswerten"),
            allowedRolesOrPermissions: [
              "TeacherRole",
              "ClassTeacherRole",
              "AbsenceAdministrator",
            ],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/evaluate-absences",
          },
        ],
      },
      {
        label: msg("Angebote"),
        items: [
          {
            key: "coursesAndEvents",
            label: msg("Kurse und Veranstaltungen"),
            allowedRolesOrPermissions: null,
            deniedInstanceIds: null,
            appKey: "kursausschreibung",
            appPath: "#/",
          },
          {
            key: "internalTraining",
            label: msg("Schulinterne Weiterbildung"),
            allowedRolesOrPermissions: [
              "TeacherRole",
              "ClassTeacherRole",
              "AbsenceAdministrator",
              "SubstituteAdministrator",
            ],
            deniedInstanceIds: null,
            appKey: "kursausschreibung",
            appPath: "#/",
          },
          {
            key: "reservations",
            label: msg("Räume und Geräte reservieren"),
            allowedRolesOrPermissions: null,
            deniedInstanceIds: null,
            appKey: "reservation",
            appPath: "#/",
          },
        ],
      },
      {
        label: msg("Aus-/Weiterbildungen"),
        items: [
          {
            key: "myAbsences",
            label: msg("Absenzen"),
            allowedRolesOrPermissions: ["Student"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/my-absences",
          },
          {
            key: "myGrades",
            label: msg("Noten"),
            allowedRolesOrPermissions: ["Student"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/",
          },
          {
            key: "schedule",
            label: msg("Stundenplan"),
            allowedRolesOrPermissions: ["Student"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/",
          },
        ],
      },
      {
        label: msg("Administration"),
        items: [
          {
            key: "substitutionsAdmin",
            label: msg("Stellvertretungen administrieren"),
            allowedRolesOrPermissions: ["SubstituteAdministrator"],
            deniedInstanceIds: null,
            appKey: "stellvertretung",
            appPath: "#/substitutions/admin",
          },
          {
            key: "personSearch",
            label: "Personen und Institutionen suchen",
            allowedRolesOrPermissions: ["PersonRight"],
            deniedInstanceIds: null,
            appKey: "schulleiterPersonen",
            appPath: "#/persons",
          },
          {
            key: "eventRegistration",
            label: msg("Anmeldedetails einlesen"),
            allowedRolesOrPermissions: [
              "PersonRight",
              "RegistrationRightWeiterbildungModulanlass",
              "RegistrationRightWeiterbildungKurs",
            ],
            deniedInstanceIds: null,
            appKey: "anmeldedetailsEinlesen",
            appPath: "#/input/",
          },
        ],
      },
    ];
  },
};
