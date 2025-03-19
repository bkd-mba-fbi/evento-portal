[back](../README.md)

# Hotfix webapp-schulverwaltung

As an example, we assume the following constellation:

- _evento-portal_ `v1.31.1` is deployed to the _test_ environment.
- _evento-portal_ `v1.31.0` is deployed to the _production_ environment.
- There is a _webapp-schulverwaltung_ bug in the _production_ environment (release `v1.31.0`).
- Due to ongoing development, the _webapp-schulverwaltung_ `main` branch contains changes we don't want to release yet.

So, we want to fix the bugged _webapp-schulverwaltung_ version that has been released with _evento-portal_ `v1.31.0` and then release it as a hotfix (without the changes currently on _webapp-schulverwaltung_ `main`).

## Step 1: Determine the app commit

To find out which commit of _webapp-schulverwaltung_ is part of a specific _evento-portal_ release, we can consider the Git history of the _evento-portal_ repository:

```
 1   $ git log --oneline
 2   f975810 (tag: v1.31.1, origin/hotfix/30174-Notenblatt-Absenzenkontrolle-Adressliste) Notenblatt-Absenzenkontrolle-Adressliste implemented on classes
 3   2ff5582 Add webapp-schulverwaltung build 157885a0
 4   4587893 Add webapp-schulverwaltung build 525812c1
 5   eba1eed Add webapp-schulverwaltung build 2121698a
 6   9eb9cd4 Add webapp-schulverwaltung build 37776d6b
 7   0e07462 Add webapp-schulverwaltung build cc0b7ea3
 8   94d3a03 Add webapp-schulverwaltung build 3249d45b
 9   e79ce56 Add webapp-schulverwaltung build 5e7bf55e
10   1042ef1 Add webapp-schulverwaltung build 2cd6d99a
11   ba66e4f Upgrade dependencies, document lifecycle #770
12   a6b5235 Add webapp-schulverwaltung build fac48e11
13   0e84771 Add link to Gitbook
14   4c9be2e (tag: v1.31.0) Exclude /unrestricted/* from being served/cached by the service worker #190
15   bd51c1f Bump vite from 6.0.3 to 6.0.11
16   12bd6c1 Add webapp-schulverwaltung build e415b4b8
17   796d724 (tag: v1.30.0) Add webapp-schulverwaltung build 2ef0962e
18   309fd2c gem:28587 change settings report Id
19   becbb37 Add webapp-schulverwaltung build 41da630f
20   264ce3c Add webapp-schulverwaltung build b13bb20a
21   75217d8 Add webapp-schulverwaltung build 13e0ba8c
...
```

We can find the tag `v1.31.0` on line 14:

```
4c9be2e6 (tag: v1.31.0) Exclude /unrestricted/* from being served/cached by the service worker #190
```

To determine the app commit, we have to find the latest commit below it with the message `Add webapp-schulverwaltung build <commit id>` (could be the tagged commit itself). In this example, we can find it on line 16:

```
12bd6c1a Add webapp-schulverwaltung build e415b4b8
```

The commit with id `e415b4b8` in the _webapp-schulverwaltung_ repository is the deployed version we'd like to fix in this case.

## Step 2: Create app hotfix branch & commit fix

Given the affected commit with id `e415b4b8` from the previous section, we create a hotfix branch in the _webapp-schulverwaltung_ repository from it:

```bash
git checkout e415b4b8
git switch -c hotfix/1234-short-description
```

Now we can fix the issue and commit it.

## Step 3: Create portal hotfix branch & merge app hotfix

1. Create a _evento-portal_ hotfix branch according to the instructions in [Hotfix Release](./releasing.md#hotfix-release) and switch to it.
1. Build the _webapp-schulverwaltung_ and commit the artifacts to the _evento-portal_ repository: \
   Assuming you've cloned the _evento-portal_ and the _webapp-schulverwaltung_ repositories into the same directory, you can execute `npm run build-and-copy-local` in the _webapp-schulverwaltung_ repository.
1. Commit the updated artefacts in the `public/` directory of the _evento-portal_ repostory to the hotfix branch.
1. Continue with the instructions in [Hotfix Release](./releasing.md#hotfix-release) to release the hotfix.
1. In the _webapp-schulverwaltung_ Repository, merge back the changes of the hotfix branch into `main`, so they will be included in future releases.
1. Finally you can delete the hotfix branches in the _evento-portal_ and _webapp-schulverwaltung_ repositories.
