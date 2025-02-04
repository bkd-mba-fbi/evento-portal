[back](../README.md)

# Lifecycle

Before starting a new development phase, we usually update the frameworks and dependencies first.

## Update Dependencies

### Angular

To update to a newer version of Angular, see the official [Update Guide](https://angular.dev/update-guide).

- Check that all Angular libraries (e.g. `ng-bootstrap`, `ng-translate`) are compatible with the target Angular version
- Update Angular to the target version using the [Update Guide](https://angular.dev/update-guide)
- Update the Angular libraries (check changelogs for breaking changes)
- See the [Angular release blog post](https://blog.angular.dev/) for optional migrations and new features
- Ensure that all tests and linting are successful. If necessary, test certain components/aspects manually.

### Other Dependencies

The easiest way to update the dependencies is to use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).

- You can use the interactive mode to selectively apply the updates: `npx npm-check-updates -i`
- Patch / minor updates can usually be applied without problems
- For major updates, check each package's changelog / migration guide for breaking changes
- When Prettier is updated, the source code needs to be reformatted, see [Update Prettier Version](./prettier.md#update-prettier-version)
- Do not update TypeScript beyond the [version supported by Angular](https://angular.dev/reference/versions)
- Ensure that all tests and linting are successful. If necessary, test certain components/aspects manually.

## Uncluttering

Print a report of unused dependencies, files & exports using [Knip](https://github.com/webpro/knip) (for the configuration, see [.knip.json](../.knip.json)):

```
npm run unused
```
