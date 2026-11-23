# Development log — Evidence 4

Project: TaskFlow | Repository: https://github.com/Villelita/Evidence4-TaskFlow

The following entries document actual work performed during project preparation on 23 November 2026. Linked files are local evidence until the project is uploaded; add permanent GitHub commit links and screenshots before submission. No remote success is claimed.

| Date | Work performed and reason | Evidence | Problem / resolution |
|---|---|---|---|
| 2026-11-23 | Created and verified the public repository with main as default branch. | [Initial commit](https://github.com/Villelita/Evidence4-TaskFlow/commit/2c897a1386a1fce63fed3b2f212934aa8157fa7e) | Integration write requests returned 403; switched to a local package for manual upload. |
| 2026-11-23 | Initialized a dependency-free Node.js project to make setup reproducible. | [package.json](package.json), [lockfile](package-lock.json) | Avoided unnecessary runtime dependencies; npm install completed. |
| 2026-11-23 | Implemented task functions separately from the UI for unit testing. | [tasks.mjs](docs/tasks.mjs) | Blank, oversized and duplicate tasks are rejected. |
| 2026-11-23 | Built a responsive browser UI for task management. | [HTML](docs/index.html), [CSS](docs/style.css) | Added narrow-screen layout and accessible form labels. |
| 2026-11-23 | Integrated local storage and safe text rendering. | [app.mjs](docs/app.mjs) | Storage errors are handled without crashing; titles use textContent rather than HTML injection. |
| 2026-11-23 | Wrote and executed eleven unit tests for normal, boundary and invalid cases. | [Tests](test/tasks.test.mjs), [execution output](evidence/local-tests.txt) | All 11 passed locally; no failing local tests in this baseline. |
| 2026-11-23 | Started the local HTTP server and checked application assets. | [server](server.mjs), [HTTP results](evidence/local-http.txt) | All expected assets returned 200; unknown route returned 404. |
| 2026-11-23 | Prepared CI and release documentation for repeatable delivery. | [Workflow](.github/workflows/ci.yml), [deployment guide](docs/DEPLOYMENT.md), [checklist](RELEASE_CHECKLIST.md) | Remote writes unavailable; CI, protection, PR approval and Pages activation remain pending. |

## Remote release evidence (complete after actual events)

| Event | Date | Evidence URL / screenshot | Result or fix |
|---|---|---|---|
| Initial upload and green CI | Pending | Pending | Pending |
| Branch protection configured | Pending | Pending | Pending |
| PR blocked by failing unit test | Pending | Pending | Pending |
| Fix and green PR CI | Pending | Pending | Pending |
| Independent approval and merge | Pending | Pending | Pending |
| Pages deployment and smoke test | Pending | Pending | Pending |

Release record: date, operator, SHA, published URL, deployment run, smoke-test results and rollback outcome to be recorded after deployment.
