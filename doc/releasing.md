[back](../README.md)

# Branching, Releasing & Deployment

## Environments

Here is an overview of the operation environments the _Evento Portal_ will be deployed to and their corresponding Git branches:

| Environment | Platform           | Git Branch   | Purpose                                                  |
| ----------- | ------------------ | ------------ | -------------------------------------------------------- |
| Development | Netlify            | `main`       | Review latest changes during development                 |
| Test        | Bedag (Kubernetes) | `test`       | Test on close to production environment before releasing |
| Production  | Bedag (Kubernetes) | `production` | "Live" version used by the users                         |

## Branching & Releasing Concept

Development:

- The active development happens in the `main` branch using temporary feature branches that are merged back into `main`. The naming scheme for feature branches should be `feature/1234-short-description` (with `1234` being the issue number and `short-description` being summary of the purpose of the branch).

- Based on the [testBuildEnv.yml](../.github/workflows/testBuildEnv.yml) GitHub Actions workflow, the latest commit from the `main` branch will be deployed to a _development_ environment on Netlify (on push). This is used by BKD to review the latest changes during development. The deployment itself is not part of the workflow.

Test:

- To release & deploy to the _test_ environment running at Bedag, BKD merges the `main` branch into the `test` branch. The workflow [docker.yml](../.github/workflows/docker.yml) builds a Docker image (see [Dockerfile](../Dockerfile)) and pushes the image to the Docker registry (TODO: describe which one; what about registry sync?). This image will be tagged with the `test` tag and an automatically incremented version tag (e.g. `1.3.0`). The Git commit will also be tagged with this version tag (e.g. `v1.3.0`). In a Gitops manner, the Bedag cluster will then deploy the `test` Image to the _test_ environment.

Production:

- To release & deploy to the _production_ environment running at Bedag, BKD merges the `test` branch into the `production` branch. The workflow [docker.yml](../.github/workflows/docker.yml) can usually reuse the Docker image already built for this commit and will tag it with the `production` tag. In a Gitops manner, the Bedag cluster will then deploy the `production` Image to the _production_ environment.

- Hotfixes can either be made on the `production` branch (using a hotfix branch if appropriate), then cherry-picked back into the `main` branch. Or they can be made in the `main` branch, then cherry-picked into the `test`/`production` branch.

## Release Instructions

TODO
