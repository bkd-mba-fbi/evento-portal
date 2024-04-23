import { msg } from "@lit/localize";

/**
 * This file contains the static configuration that is part of the
 * build. For environment specific settings, see `env-settings.ts` and
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
  footer: ReadonlyArray<NavigationItem>;
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
    {
      // Dummy app entry for the footer pages
      key: "footer",
      scope: "Public",
      root: "",
      heading: true,
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
  navigationPhotoList: {
    key: "photoList",
    get label() {
      return msg("Fotoliste");
    },
    allowedRolesOrPermissions: ["TeacherRole"],
    deniedInstanceIds: null,
    appKey: "fotoliste",
    appPath: "#/",
  },
  navigationInputGrades: {
    key: "inputGrades",
    get label() {
      return msg("Noteneingabe");
    },
    allowedRolesOrPermissions: ["TeacherRole"],
    deniedInstanceIds: null,
    appKey: "noteneingabe",
    appPath: "#/",
  },
  navigationMyProfile: {
    key: "myProfile",
    get label() {
      return msg("Mein Profil");
    },
    allowedRolesOrPermissions: null,
    deniedInstanceIds: null,
    appKey: "schulverwaltung",
    appPath: "#/my-profile",
  },
  navigationMySettings: {
    key: "mySettings",
    get label() {
      return msg("Einstellungen");
    },
    allowedRolesOrPermissions: null,
    deniedInstanceIds: null,
    appKey: "schulverwaltung",
    appPath: "#/my-settings",
  },
  navigation: [
    {
      get label() {
        return msg("Unterricht");
      },
      items: [
        {
          key: "presenceControl",
          get label() {
            return msg("Präsenzkontrolle");
          },
          allowedRolesOrPermissions: ["TeacherRole", "LessonTeacherRole"],
          deniedInstanceIds: null,
          appKey: "schulverwaltung",
          appPath: "#/presence-control",
        },
        {
          key: "currentEvents",
          get label() {
            return msg("Aktuelle Fächer");
          },
          allowedRolesOrPermissions: [
            "TeacherRole",
            "LessonTeacherRole",
            "ClassTeacherRole",
          ],
          deniedInstanceIds: null,
          appKey: "schulverwaltung",
          appPath: "#/events/current",
        },
        {
          key: "tests",
          get label() {
            return msg("Tests und Bewertung");
          },
          allowedRolesOrPermissions: ["TeacherRole", "LessonTeacherRole"],
          deniedInstanceIds: null,
          appKey: "schulverwaltung",
          appPath: "#/events",
        },
        {
          key: "substitutionsAssign",
          get label() {
            return msg("Stellvertretung erfassen");
          },
          allowedRolesOrPermissions: ["TeacherRole", "LessonTeacherRole"],
          deniedInstanceIds: null,
          appKey: "stellvertretung",
          appPath: "#/substitutions/assign",
        },
        {
          key: "substitutionsExecute",
          get label() {
            return msg("Stellvertretung ausüben");
          },
          allowedRolesOrPermissions: ["TeacherRole", "LessonTeacherRole"],
          deniedInstanceIds: null,
          appKey: "stellvertretung",
          appPath: "#/substitutions/execute",
        },
      ],
    },
    {
      get label() {
        return msg("Absenzen");
      },
      items: [
        {
          key: "openAbsences",
          get label() {
            return msg("Offene Absenzen entschuldigen");
          },
          allowedRolesOrPermissions: [
            "TeacherRole",
            "LessonTeacherRole",
            "ClassTeacherRole",
          ],
          deniedInstanceIds: null,
          appKey: "schulverwaltung",
          appPath: "#/open-absences",
        },
        {
          key: "editAbsences",
          get label() {
            return msg("Absenzen bearbeiten");
          },
          allowedRolesOrPermissions: [
            "TeacherRole",
            "LessonTeacherRole",
            "ClassTeacherRole",
            "AbsenceAdministratorRole",
          ],
          deniedInstanceIds: null,
          appKey: "schulverwaltung",
          appPath: "#/edit-absences",
        },
        {
          key: "evaluateAbsences",
          get label() {
            return msg("Absenzen auswerten");
          },
          allowedRolesOrPermissions: [
            "TeacherRole",
            "LessonTeacherRole",
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
      get label() {
        return msg("Aus-/Weiterbildung");
      },
      items: [
        {
          key: "myAbsences",
          get label() {
            return msg("Absenzen");
          },
          allowedRolesOrPermissions: ["StudentRole"],
          deniedInstanceIds: null,
          appKey: "schulverwaltung",
          appPath: "#/my-absences",
        },
        {
          key: "myGrades",
          get label() {
            return msg("Noten");
          },
          allowedRolesOrPermissions: ["StudentRole"],
          deniedInstanceIds: null,
          appKey: "schulverwaltung",
          appPath: "#/my-grades",
        },
      ],
    },
    {
      get label() {
        return msg("Angebote");
      },
      items: [
        {
          key: "coursesAndEvents",
          get label() {
            return msg("Kurse und Veranstaltungen");
          },
          allowedRolesOrPermissions: null,
          deniedInstanceIds: null,
          appKey: "kursausschreibung",
          appPath: "#/",
        },
        {
          key: "internalTraining",
          get label() {
            return msg("Schulinterne Weiterbildung");
          },
          allowedRolesOrPermissions: [
            "TeacherRole",
            "LessonTeacherRole",
            "ClassTeacherRole",
            "AbsenceAdministratorRole",
            "SubstituteAdministratorRole",
            "Reservations",
          ],
          deniedInstanceIds: null,
          appKey: "kursausschreibungIntern",
          appPath: "#/",
        },
        {
          key: "reservations",
          get label() {
            return msg("Räume und Geräte reservieren");
          },
          allowedRolesOrPermissions: ["Reservations"],
          deniedInstanceIds: null,
          appKey: "reservation",
          appPath: "#/",
        },
      ],
    },
    {
      get label() {
        return msg("Administration");
      },
      items: [
        {
          key: "substitutionsAdmin",
          get label() {
            return msg("Stellvertretungen administrieren");
          },
          allowedRolesOrPermissions: ["SubstituteAdministratorRole"],
          deniedInstanceIds: null,
          appKey: "stellvertretung",
          appPath: "#/substitutions/admin",
        },
        {
          key: "personSearch",
          get label() {
            return msg("Personen und Institutionen suchen");
          },
          allowedRolesOrPermissions: ["PersonRight"],
          deniedInstanceIds: null,
          appKey: "schulleiterPersonen",
          appPath: "#/persons",
        },
        {
          key: "eventRegistration",
          get label() {
            return msg("Anmeldedetails einlesen");
          },
          allowedRolesOrPermissions: [
            "PersonRight",
            "RegistrationRightAusbildungSemester",
            "RegistrationRightAusbildungKurs",
            "RegistrationRightAusbildungModulanlass",
            "RegistrationRightAusbildungModul",
            "RegistrationRightAusbildungStudiengang",
            "RegistrationRightAusbildungStudienjahrgang",
            "RegistrationRightAusbildungVeranstaltung",
            "RegistrationRightWeiterbildungCAS",
            "RegistrationRightWeiterbildungCASAnlass",
            "RegistrationRightWeiterbildungDAS",
            "RegistrationRightWeiterbildungDASJahrgang",
            "RegistrationRightWeiterbildungInteressent",
            "RegistrationRightWeiterbildungKurs",
            "RegistrationRightWeiterbildungMAS",
            "RegistrationRightWeiterbildungMASJahrgang",
            "RegistrationRightWeiterbildungModulanlass",
            "RegistrationRightWeiterbildungModulbefreiung",
            "RegistrationRightWeiterbildungSemester",
            "RegistrationRightWeiterbildungVeranstaltung",
            "RegistrationRightWeiterbildungEvaluationsanlass",
            "RegistrationRightWeiterbildungFakturierung",
            "RegistrationRightWeiterbildungMailingliste",
            "RegistrationRightWeiterbildungPlatzangebot",
            "RegistrationRightWeiterbildungReservation",
          ],
          deniedInstanceIds: null,
          appKey: "anmeldedetailsEinlesen",
          appPath: "#/input",
        },
      ],
    },
  ],
  footer: [
    {
      key: "contact",
      get label() {
        return msg("Kontakt");
      },
      allowedRolesOrPermissions: null,
      deniedInstanceIds: null,
      appKey: "footer",
      appPath: "#/",
    },
    {
      key: "legal",
      get label() {
        return msg("Rechtliche Hinweise");
      },
      allowedRolesOrPermissions: null,
      deniedInstanceIds: null,
      appKey: "footer",
      appPath: "#/",
    },
    {
      key: "imprint",
      get label() {
        return msg("Impressum");
      },
      allowedRolesOrPermissions: null,
      deniedInstanceIds: null,
      appKey: "footer",
      appPath: "#/",
    },
  ],
};
