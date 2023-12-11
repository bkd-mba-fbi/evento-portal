[back](../README.md)

# Deployment

## Operation Environments

Here is an overview of the operation environments the _Evento Portal_ will be deployed to and their corresponding Git branches:

| Environment | Platform           | Git Branch                      | Purpose                                                  | Url                          | Status                                                                                                                                                      |
| ----------- | ------------------ | ------------------------------- | -------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Development | Netlify            | `main`                          | Review latest changes during development                 | https://evtapp.netlify.app/  | [![Netlify Status](https://api.netlify.com/api/v1/badges/fccfe392-ffb5-4e40-b95a-5d319e431559/deploy-status)](https://app.netlify.com/sites/evtapp/deploys) |
| Test        | Bedag (Kubernetes) | `test`<br>(or `hotfix-*`)       | Test on environment close to production before releasing | https://evt-test.apps.be.ch/ |                                                                                                                                                             |
| Production  | Bedag (Kubernetes) | `production`<br>(or `hotfix-*`) | "Live" version used by the users                         | https://evt.apps.be.ch/      |                                                                                                                                                             |

## Releasing & Image Building

See [Git Workflow](./git.md) for the general branching concept and workflow.

### Development Environment

- The latest commit from the `main` branch will be automatically deployed to a _development_ environment on Netlify (on push), based on the [testBuildEnv.yml](../.github/workflows/testBuildEnv.yml) GitHub Actions workflow.
- The workflow builds a ZIP & uploads it to GitHub Pages.
- The deployment itself is controlled by Netlify and has been configured by BKD.

### Test Environment

- To release & deploy to the _test_ environment, BKD manually dispatches the [container-build.yml](../.github/workflows/container-build.yml) workflow (see [Release Instructions](./releasing.md)).
- The workflow merges the `main` branch into the `test` branch.
- It builds a Docker image (see [Dockerfile](../Dockerfile)) and pushes that image to the GitHub Docker registry (see [evento-portal packages](https://github.com/bkd-mba-fbi/evento-portal/pkgs/container/evento-portal)).
- The Docker image will be tagged with the `test` tag and an automatically incremented version tag (e.g. `1.3.0`). The Git commit will also be tagged with this version tag (e.g. `v1.3.0`).
- In a GitOps manner, the Bedag cluster will then deploy the `test` Image to the _test_ environment.

### Production Environment

- To release & deploy to the _production_ environment, BKD manually dispatches the [container-build.yml](../.github/workflows/container-build.yml) workflow (see [Release Instructions](./releasing.md)).
- The workflow merges the `test` branch into the `production` branch.
- It can usually reuse the Docker image already built for this commit and will tag it with the `production` tag.
- In a GitOps manner, the Bedag cluster will then deploy the `production` Image to the _production_ environment.

### Hotfix

A hotfix is necessary if a critical problem occurs in production that needs to be fixed at short notice, but in the meantime further changes have already been made on the `main` branch that should not yet be deployed.

- To release & deploy a hotfix to the _production_ environment, BKD manually dispatches the [hotfix-container-build.yml](../.github/workflows/hotfix-container-build.yml) workflow (see [Release Instructions](./releasing.md)).
- The workflow merges the hotfix branch into the `production` branch.
- It builds a Docker image and will tag it with the `hotfix` tag and the automatically incremented version tag. Note: The version for hotfixes will be incremented on the patch level. If you create a hotfix from 1.3.0, the first hotfix build will recieve the version 1.3.1.
- Bedag has to advise the deployment for the _production_ environment to pull the image with the `hotfix` tag.
