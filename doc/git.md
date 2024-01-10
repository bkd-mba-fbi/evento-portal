[back](../README.md)

# Git Workflow

```mermaid
gitGraph
  commit tag: "1.3.0"

  branch test order: 3

  checkout main
  branch production order: 4

  checkout main
  commit

  branch feature/1001-footer-links order: 1
  checkout feature/1001-footer-links
  commit
  commit
  commit
  checkout main
  merge feature/1001-footer-links

  branch bug/1002-fix-styling order: 2
  checkout bug/1002-fix-styling
  commit
  checkout main
  merge bug/1002-fix-styling

  commit
  commit

  checkout test
  merge main tag: "1.4.0"

  checkout production
  merge test tag: "1.4.0"

  checkout production
  branch hotfix/1003-critical-issue order: 5

  checkout main
  commit
  commit

  checkout hotfix/1003-critical-issue
  commit tag: "1.4.1"

  checkout production
  merge hotfix/1003-critical-issue

  checkout test
  merge hotfix/1003-critical-issue

  checkout main
  merge hotfix/1003-critical-issue
```

- The active development happens in the `main` branch.
- The team uses temporary **feature branches** that are created from and merged back into `main`.
  - The naming scheme for feature branches is `feature/1234-short-description` (with `1234` being the issue number and `short-description` being summary of the purpose of the branch)
  - For bugfixes the branch can can be named `bug/1234-short-description`.
- Commits should be **atomic** (i.e. a stable, independent unit of change – the repository should still build, pass tests, and generally function if rolled back). Squash commits if necessary.
- The developer creates a pull request for the feature branch and assigns a reviewer.
- Feature branches should be merged **fast-forward**, without merge commit.
- There are release branches (`test` and `production`) for the corresponding environments and possibly temporary hotfix branches (see [Deployment](./deployment.md)).

## Git Messages Convention

Inspired by the article [How to Write a Git Commit Message](https://cbea.ms/git-commit/), we follow this convention for Git commit messages:

- Language: English
- Short and concise message, ideally under 50 characters ([Details](https://cbea.ms/git-commit/#limit-50))
- Capitalize the message ([Details](https://cbea.ms/git-commit/#capitalize))
- Do not end the message with a period ([Details](https://cbea.ms/git-commit/#end))
- Use the imperative mood, so `Fix bug with X` instead of `Fixed bug with X` or `More fixes for broken stuff` ([Details](https://cbea.ms/git-commit/#imperative))
- If available, reference issue: `Add X #123`
