// Rename this file to settings.js and adjust the settings

window.schulverwaltung = window.schulverwaltung || {};

window.schulverwaltung.settings = {
  /**
   * General settings
   */
  // API base URL (without trailing slash)
  apiUrl: window.parent.eventoPortal.settings.apiServer,

  // Path (without trailing slash, relative to the index.html) to the
  // JavaScript bundles and the assets directory containing image and
  // locale files
  scriptsAndAssetsPath: '/apps/webapp-schulverwaltung',

  // Maximum loaded entries per page, where pagination is in place
  paginationLimit: 200,

  /**
   * Presence types
   */
  // Id of the PresenceType that represents an absence without cause
  // (i.e. the default absence that will be used when changing state
  // in the presence control module)
  absencePresenceTypeId: 11,

  // Id of the PresenceType that represents the "late" incident
  latePresenceTypeId: 20,

  // Id of the PresenceType that represents the "dispensation" absence
  dispensationPresenceTypeId: 18,

  // Id of the PresenceType that represents the "half day" absence
  halfDayPresenceTypeId: 17,

  /**
   * Absence states
   */
  // Id of the confirmation state for absences that need to be
  // confirmed
  unconfirmedAbsenceStateId: 219,

  // Id of the confirmation state for absences without valid excuse
  unexcusedAbsenceStateId: 225,

  // Id of the confirmation state for absences with valid excuse
  excusedAbsenceStateId: 220,

  // Id of the confirmation state for absences that need to be checked
  checkableAbsenceStateId: 1080,

  // In presences control, the presence data of the selected lesson is
  // reloaded for the following interval, if there is no user activity
  // (such as clicks or keypresses). Refresh time is in seconds (15 *
  // 60 * 1000 ? refresh every 15 minutes of inactivity).
  lessonPresencesRefreshTime: 15 * 60 * 1000,

  // In presence control, a hint is shown if the student has
  // unconfirmed absences (in any lesson). These unconfirmed absences
  // are refreshed each time the user changes the date and in fixed
  // intervals afterwards (polling). Refresh time is in seconds and
  // may be set to `null` to disable polling (5 * 60 * 1000 = refresh
  // every 5 minutes).
  unconfirmedAbsencesRefreshTime: 5 * 60 * 1000,

  /**
   * Reports
   */
  // Id of the report that contains a user's master data (used in my profile)
  personMasterDataReportId: 0,

  // Id of the report that contains the open absences with
  // confirmation values to sign (used in my absences)
  studentConfirmationReportId: 290036,

  // Id of the report used in evaluate absences
  evaluateAbsencesReportId: 290048,

  // Id of the report used for the course report
  testsByCourseReportId: 290044,

  // Id of the report used for the tests report for a single student
  testsBySubscriptionReportIdStudent: 290043,
  testsBySubscriptionReportIdTeacher: 290042,

  /**
   * Groups
   */
  // Id that determines if the group icon is shown on the presence control
  subscriptionDetailGroupId: 3843,

  // X-Role-Restriction custom HTTP header values by module
  headerRoleRestriction: {
    myAbsences: 'StudentRole',
    presenceControl: 'LessonTeacherRole;TeacherRole;ClassTeacherRole',
    openAbsences: 'LessonTeacherRole;ClassTeacherRole;TeacherRole',
    editAbsences: 'LessonTeacherRole;ClassTeacherRole;TeacherRole;AbsenceAdministratorRole',
    evaluateAbsences: 'LessonTeacherRole;ClassTeacherRole;TeacherRole;AbsenceAdministratorRole',
  },

  /**
   * Notifications
   */
  // Refresh time for notifications
  notificationRefreshTime: 30,

  // Types of notifications and their language-specific texts
  // (the description may contain newlines '\n')
  notificationTypes: {
    gradePublish: {
      de: {
        label: 'Note publiziert',
        description: 'Die Note eines Tests wurde publiziert.',
      },
      fr: {
        label: 'Note publiée',
        description: "La note d'un test a été publiée.",
      },
    },
	BM2Student: {
      de: {
        label: 'Präsenz im BM2-Unterricht',
        description:
          'Sie haben eine Präsenz von <= 85% in einem Fach erreicht.',
      },
      fr: {
        label: "Présence dans l'enseignement MP2",
        description:
          'Vous avez atteint une présence de <= 85 % dans une discipline.',
      },
    },
    absenceMessage: {
      de: {
        label: 'Absenzenmeldung',
        description:
          'Fachlehrperson: Lernende melden sich vom Unterricht ab\nKlassenlehrperson: Antrag freier Halbtag',
      },
      fr: {
        label: 'Annonce des absences',
        description:
          "Enseignant-e : les élèves annoncent leur absence\nMaître-sse de classe : demande de demi-journée libre",
      },
    },
    absenceMessageTeacher: {
      de: {
        label: 'Absenz erfasst (Lehrperson)',
        description:
          'Klassenlehrperson: Eine Fachlehrperson hat eine Absenz für Ihre Lernenden erfasst.',
      },
      fr: {
        label: "Absence saisie (enseignant-e)",
        description:
          "Maître-sse de classe : un-e enseignant-e a saisi une absences pour vos élèves.",
      },
    },
    teacherSubstitutions: {
      de: {
        label: 'Stellvertretung',
        description:
          'Lehrperson: Sie wurden als Stellvertretung für eine andere Lehrperson erfasst.',
      },
      fr: {
        label: 'Remplacement',
        description:
          "Enseignant-e : vous avez été saisi-e pour remplacer un-e autre enseignant-e.",
      },
    },
    BM2Teacher: {
      de: {
        label: 'Präsenz im BM2-Unterricht',
        description:
          'Fachlehrperson: Im unterrichteten Fach hat ein/e Lernende/r eine Präsenz von <= 85% erreicht.',
      },
      fr: {
        label: "Présence dans l'enseignement MP2",
        description:
          'Enseignant-e : Dans la discipline enseignée, un-e élève a atteint une présence de <= 85 %.',
      },
    },
  },

  notificationTypesAssignments: [
    {
      roles: ['StudentRole'],
      types: ['gradePublish','BM2Student'],
    },
    {
      roles: ['LessonTeacherRole', 'ClassTeacherRole', 'TeacherRole'],
      types: [
        'absenceMessage',
        'absenceMessageTeacher',
        'teacherSubstitutions',
		'BM2Teacher',
      ],
    },
  ],

  /**
   * Events
   */
  eventlist: {
    // Links to the external event detail and evaluation modules.
    // The application will add the event id (IDAnlass) and the preceding equal sign,
    // e.g. link-to-event-detail-module.aspx?IDAnlass=1234
    eventdetail: '../cst_pages/cst_anlassdetailma.aspx?IDAnlass',
    evaluation: '../cst_pages/brn_qualifikationdurchdozenten.aspx?IDAnlass',

    // Only events with a status id in the following list are fetched
    statusfilter:
    '14030;14025;14017;14020;10350;10335;10355;10315;10330;10325;10320;10340;10345;10230;10225;10240;10250;10260;10217;10235;10220;10226;10227;10250;10300;10305;10310;14040'
  },

  /**
   * My absences
   */
  // Instance IDs of schools where students cannot report absences after lessons have started
  preventStudentAbsenceAfterLessonStart: [], // ["GYmTEST"],
};
