# Release and submission checklist

## Upload the initial project
1. Extract the ZIP. Upload the contents (not the enclosing folder) to the existing GitHub repository using Add file > Upload files. Commit to main before enabling protection.
2. Confirm `.github/workflows/ci.yml` exists in the repository. If hidden folders are omitted, use Add file > Create new file and enter that full path, then paste the workflow from the extracted file.
3. Open Actions and verify the CI run passed. If Actions are disabled, enable them in Settings > Actions > General.

## Protect main
Settings > Branches > Add branch protection rule. Branch name pattern: `main`. Enable Require a pull request before merging, Require approvals (1), Dismiss stale approvals when new commits are pushed, Require status checks to pass before merging, select `unit-tests` after its first run, and require branches to be up to date. Enable Do not allow bypassing the above settings. Save. Capture a screenshot. If using rulesets instead, configure equivalent active rules and no bypass actors.

## Demonstrate a blocked PR
1. Open `docs/tasks.mjs` on GitHub, edit it, change `title.trim().length>100` to `title.trim().length>101`. Commit to a new branch `demo/title-validation` and create a PR targeting main.
2. Wait for CI. The 101-character rejection test must fail. Capture the failing Actions run and the blocked merge box; record their URLs in the log. Do not bypass or merge the failure.
3. Edit the same branch and restore `>100`. Commit the fix. Wait for CI to turn green. Record the successful run URL.
4. Invite a teammate through Settings > Collaborators if necessary. After they accept, request their review. They must independently review and approve the corrected PR. Merge only after all required checks and approval pass. Record the merged PR URL and screenshot.

## Deploy and submit
Follow docs/DEPLOYMENT.md. Add actual PR, CI, approval, protection and deployment evidence to DEVELOPMENT_LOG.md (a protected main requires another reviewed PR for repository edits). Open the public repository in a private browser, verify main is the default branch, run npm test from a clean clone, and verify the deployed site. Submit the repository URL and the completed development log in Teams. Remove unused cloud resources.
