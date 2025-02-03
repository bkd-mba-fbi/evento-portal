[back](../README.md)

# Lifecycle

Before starting a new development phase, we usually update the frameworks and dependencies first.

## Angular

To update to a newer version of Angular, see the official [Update Guide](https://angular.dev/update-guide).

Angular also provides a set of [Schematics](https://angular.dev/reference/migrations) to help you automatically migrate to the latest features.

## Lit

Refer to the [Lit upgrade guide](https://lit.dev/docs/releases/upgrade/) to update to the latest version.

## Other Dependencies

The easiest way to update the dependencies is to use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).

- It is recommended that updates are applied selectively: `ncu -u package1 package2`
- Patch / minor updates can usually be applied without problems
- For major updates, check each package's changelog / migration guide for breaking changes
- Do not update TypeScript beyond the [version supported by Angular](https://angular.dev/reference/versions)
