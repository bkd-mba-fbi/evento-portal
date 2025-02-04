[back](../README.md)

# Lifecycle

Before starting a new development phase, we usually update the frameworks and dependencies first.

## Angular

To update to a newer version of Angular, see the official [Update Guide](https://angular.dev/update-guide).

- Check that all Angular libraries (e.g. `ng-bootstrap`, `ng-translate`) are compatible with the target Angular version
- Update Angular to the newer version using the [Update Guide](https://angular.dev/update-guide)
- Update the Angular libraries (check changelogs for breaking changes)
- See the [Angular release blog post](https://blog.angular.dev/) for optional migrations

## Other Dependencies

The easiest way to update the dependencies is to use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).

- You can use the interactive mode to selectively apply the updates: `npx npm-check-updates -i`
- Patch / minor updates can usually be applied without problems
- For major updates, check each package's changelog / migration guide for breaking changes
- See [Update Prettier Version](./prettier.md#update-prettier-version)
- Do not update TypeScript beyond the [version supported by Angular](https://angular.dev/reference/versions)
