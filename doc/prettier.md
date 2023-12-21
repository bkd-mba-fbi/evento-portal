[back](../README.md)

# Prettier

We use Prettier to automatically format the source code and order the imports (using `prettier-plugin-sort-imports`).

The goal is to integrate it in the development workflow as follows:

- Format on save in the editor, see https://prettier.io/docs/en/editors.html<br>
  → Each developer should configure this themselves.
- Pre-commit hook in Git<br>
  → Automatically configured on first `npm install`.

In addition to this we disable all conflicting ESLint style rules with the `eslint-config-prettier`.

## Update Prettier Version

Prettier is pinned to an exact version to avoid automatic updates that might cause the formatting to change.

To manually update Prettier you should execute the following command, which will update and pin Prettier to the latest version and reformat the source code with new version:

```
npm run format:upgrade
git commit -a -m "Reformat sources after Prettier update"
```

You can also just reformat the source code:

```
npm run format
git commit -a -m "Reformat sources after Prettier update"
```
