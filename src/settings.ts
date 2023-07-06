import { msg } from "@lit/localize";

/**
 * This file contains the static configuration that is part of the
 * build. For environment specific settings, see
 * `public/settings.example.js`.
 */

export type Settings = Readonly<{
  apps: ReadonlyArray<Readonly<App>>;
  navigationHome: NavigationItem;
  navigationMyProfile: NavigationItem;
  navigationMySettings: NavigationItem;
  navigationPhotoList: NavigationItem;
  navigationInputGrades: NavigationItem;
  navigation: ReadonlyArray<NavigationGroup>;
}>;

export type App = Readonly<{
  /**
   * A unique key for the app
   */
  key: string;

  /**
   * The OAuth scope associated with the app
   */
  scope: string;

  /**
   * The root directory of the app, containing the index.html
   */
  root: string;

  /**
   * Whether a H1 heading should be rendered by the portal
   */
  heading: boolean;
}>;

export type Navigation = ReadonlyArray<NavigationGroup>;

export type NavigationGroup = Readonly<{
  /**
   * A label used in navigation
   */
  label: string;

  /**
   * All navigation items contained in this group
   */
  items: ReadonlyArray<NavigationItem>;
}>;

export type NavigationItem = Readonly<{
  /**
   * A unique key for the item
   */
  key: string;

  /**
   * A label used for navigation links and as heading
   */
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

  /**
   * The key of the associated app
   */
  appKey: string;

  /**
   * The client side routing path to the app module of this item
   */
  appPath: string;
}>;

export const settings: Settings = {
  apps: [
    {
      key: "schulverwaltung",
      scope: "Tutoring",
      root: "apps/webapp-schulverwaltung/index.html",
      heading: false,
    },
    {
      key: "anmeldedetailsEinlesen",
      scope: "NG",
      root: "apps/EmberApps/AnmeldedetailsEinlesen/index.html",
      heading: true,
    },
    {
      key: "schulleiterPersonen",
      scope: "NG",
      root: "apps/EmberApps/SchulleiterPersonen/index.html",
      heading: true,
    },
    {
      key: "fotoliste",
      scope: "Tutoring",
      root: "apps/EmberApps/Fotoliste/index.html",
      heading: false,
    },
    {
      key: "kursausschreibung",
      scope: "Public",
      root: "apps/Kursausschreibung/index.html",
      heading: true,
    },
    {
      key: "kursausschreibungIntern",
      scope: "Public",
      root: "apps/Kursausschreibung/indexIntern.html",
      heading: true,
    },
    {
      key: "stellvertretung",
      scope: "Tutoring",
      root: "apps/Stellvertretung/index.html",
      heading: true,
    },
    {
      key: "reservation",
      scope: "NG",
      root: "apps/Raumreservation/index.html",
      heading: true,
    },
    {
      key: "noteneingabe",
      scope: "Tutoring",
      root: "apps/Noteneingabe/index.html",
      heading: false,
    },
  ],
  navigationHome: {
    key: "home",
    label: "Home",
    allowedRolesOrPermissions: null,
    deniedInstanceIds: null,
    appKey: "schulverwaltung",
    appPath: "#/dashboard",
  },
  get navigationPhotoList() {
    return {
      key: "photoList",
      label: msg("Fotoliste"),
      allowedRolesOrPermissions: ["TeacherRole"],
      deniedInstanceIds: null,
      appKey: "fotoliste",
      appPath: "#/",
    };
  },
  get navigationInputGrades() {
    return {
      key: "inputGrades",
      label: msg("Noteneingabe"),
      allowedRolesOrPermissions: ["TeacherRole"],
      deniedInstanceIds: null,
      appKey: "noteneingabe",
      appPath: "#/",
    };
  },
  get navigationMyProfile() {
    return {
      key: "myProfile",
      label: msg("Mein Profil"),
      allowedRolesOrPermissions: null,
      deniedInstanceIds: null,
      appKey: "schulverwaltung",
      appPath: "#/my-profile",
    };
  },
  get navigationMySettings() {
    return {
      key: "mySettings",
      label: msg("Einstellungen"),
      allowedRolesOrPermissions: null,
      deniedInstanceIds: null,
      appKey: "schulverwaltung",
      appPath: "#/my-settings",
    };
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
            appPath: "#/events/current",
          },
          {
            key: "tests",
            label: msg("Tests und Bewertung"),
            allowedRolesOrPermissions: ["TeacherRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/events",
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
              "AbsenceAdministratorRole",
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
              "AbsenceAdministratorRole",
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
              "AbsenceAdministratorRole",
              "SubstituteAdministratorRole",
            ],
            deniedInstanceIds: null,
            appKey: "kursausschreibungIntern",
            appPath: "#/",
          },
          {
            key: "reservations",
            label: msg("Räume und Geräte reservieren"),
            allowedRolesOrPermissions: ["Reservations"],
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
            allowedRolesOrPermissions: ["StudentRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/my-absences",
          },
          {
            key: "myGrades",
            label: msg("Noten"),
            allowedRolesOrPermissions: ["StudentRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/my-grades",
          },
          {
            key: "schedule",
            label: msg("Stundenplan"),
            allowedRolesOrPermissions: ["StudentRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/schedule", // TODO not implemented yet
          },
        ],
      },
      {
        label: msg("Administration"),
        items: [
          {
            key: "substitutionsAdmin",
            label: msg("Stellvertretungen administrieren"),
            allowedRolesOrPermissions: ["SubstituteAdministratorRole"],
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
