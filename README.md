# TaskFlow

Evidence 4 — Test and Release a Web App

TaskFlow is a responsive task manager with creation, completion, deletion, status filters and browser-local persistence. It uses HTML, CSS and JavaScript with no external runtime dependencies or credentials.

## Install and run
Requirements: Git and Node.js 22 or newer.

```sh
git clone https://github.com/Villelita/Evidence4-TaskFlow.git
cd Evidence4-TaskFlow
npm ci
npm start
```

Open http://localhost:3000.

## Test
Run `npm test`. The eleven tests cover normal, edge and invalid cases, immutability, deletion, completion and filtering. CI runs on each pull request targeting main and each push to main. See [local test output](evidence/local-tests.txt).

## Deploy
Use GitHub Pages from main and /docs. See [deployment guide](docs/DEPLOYMENT.md). Expected URL after activation: https://villelita.github.io/Evidence4-TaskFlow/.

## Merge policy
Require pull requests, one independent approval and the `unit-tests` check. Do not bypass protection. See [release checklist](RELEASE_CHECKLIST.md) for configuration and the failing PR demonstration.

## Development record
See [development log](DEVELOPMENT_LOG.md). Remote CI, approval and deployment evidence must be added after the actual events.
