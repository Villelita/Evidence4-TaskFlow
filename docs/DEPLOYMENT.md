# Deployment procedure

## Before deployment
Use Node.js 22+, run `npm ci` and `npm test` from a clean clone. Start the server using `npm start`. Verify creating, completing, filtering and deleting tasks. Verify persistence after reload. Check PR approval and green required CI. Record the current main commit SHA and the last known good release.

## Deploy
In GitHub, open Settings > Pages. Under Build and deployment choose Deploy from a branch, select main and /docs, and save. After approved changes merge into main, GitHub Pages automatically deploys the updated site. Check the Pages deployment workflow in Actions.

## Verify
Open the URL shown by GitHub Pages in a private browser. Add a task, mark it done, filter completed tasks, reload, confirm persistence, and delete the task. Inspect the browser console for errors. Confirm the Pages deployment run succeeded. Do not mark deployment successful until these checks pass.

## Roll back
Identify the faulty release commit and last known good SHA. Create a rollback branch from main, revert the faulty commit using `git revert SHA` (use `git revert -m 1 SHA` for a merge commit), and open a PR. Run CI and obtain independent approval before merging. Verify the redeployed site. Never force-push main or bypass protection.

## Record
Append the release date, operator, commit SHA, Pages URL, deployment run link, smoke-test outcome, and rollback outcome (if needed) to the development log. No paid cloud resources are needed. Disable Pages after grading if it is no longer needed.
