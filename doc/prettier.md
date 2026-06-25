[back](../README.md)

# Prettier

We use Prettier to automatically format the source code and order the imports (using `prettier-plugin-sort-imports`).

The goal is to integrate it in the development workflow as follows:

- Format on save in the editor, see https://prettier.io/docs/en/editors.html<br>
  → Each developer should configure this themselves.
- Pre-commit hook in Git<br>
  → Automatically configured on first `pnpm install`.
- Check formatting in pipeline.

In addition to this we disable all conflicting ESLint style rules with the `eslint-config-prettier`.

## Update Prettier Version

After updating prettier, you should also reformat the source code:

```bash
pnpm format
git commit -a -m "Reformat sources after Prettier update"
```
