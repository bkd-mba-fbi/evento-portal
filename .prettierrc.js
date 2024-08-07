const config = {
  /**
   * Enable plugin for automatically sorting of imports
   */
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],

  /**
   * Custom sorting of imports, first lit stuff, then other third
   * party libs, then own modules
   */
  importOrder: [
    "^lit$",
    "^lit/.*$",
    "^@lit/.*$",
    "^@lit-app/.*$",
    "<THIRD_PARTY_MODULES>",
    "^[./]",
  ],

  /**
   * Whether to separate sorting groups (as defined above) with
   * newline
   */
  // importOrderSeparation: true,

  /**
   * Whether to sort the specifiers on the left hand side of the
   * import statement
   */
  importOrderSortSpecifiers: true,
};

export default config;
