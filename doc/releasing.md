[back](../README.md)

# Release Instructions

You can build & deploy new releases with GitHub Actions as described in the following sections.

## Regular Release Flow (main → test → production)

1. In the tab bar of the GitHub project select _Actions_:<br>![Release Workflow](assets/images/release_step_1.png)

1. Select the workflow _Container Build and Push 🐳 ⏏️_ on the left side:<br>![Release Workflow](assets/images/release_step_2.png)

1. Click on _Run workflow_ and a dropdown will open where you can choose a branch.

1. Choose corresponding branch of the environment you want to deploy a new version to:<br>→ If you want to deploy to the _test_ environment, choose `test` (will merge `main` into `test`).<br>→ If you want to deploy to the _production_ environment, choose `production` (will merge `test` into `production`).<br>![Release Workflow](assets/images/release_step_3_4.png)

## Hotfix Release

1. Create a hotfix branch named `hotfix/1234-short-description` from the `production` branch (with `1234` being the issue number and `short-description` being a summary of the purpose of the branch).

1. Commit your fixes to the hotfix branch, then push the hotfix branch.

1. In the tab bar of the GitHub project select _Actions_:<br>![Release Workflow](assets/images/release_step_1.png)

1. Select the workflow _HotFix Build and Push 🔥🚒_ on the left side:<br>![Release Workflow](assets/images/hotfix_step_2.png)

1. Click on _Run workflow_ and a dropdown will open where you can choose a branch.

1. Choose the hotfix branch you've created earlier:<br>![Release Workflow](assets/images/hotfix_step_3_4.png)

1. When finished, the [package repository](https://github.com/bkd-mba-fbi/evento-portal/pkgs/container/evento-portal) should look similar to the following screenshot:<br>![Hotfix Releases](assets/images/hotfix.png)

1. Now you can advise Bedag to deploy the hotfix.

1. To complete the process, you have to merge back the hotfix changes to `production`, `test` and `main`, or otherwise they would be missing in the next (regular or hotfix) release.

   1. Merge the hotfix branch into `production`:

      ```
      git checkout production
      git merge hotfix/1234-short-description
      git push
      ```

   1. Merge the hotfix branch into `test`:

      ```
      git checkout test
      git merge hotfix/1234-short-description
      git push
      ```

   1. Merge the hotfix branch into `main`:

      ```
      git checkout main
      git merge hotfix/1234-short-description
      # Resolve possible merge conflicts & `git commit` them...
      git push
      ```

1. Finally, you can delete the hotfix branch.
