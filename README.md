# Hexagonal Architecture — Ports & Adapters

Snippet code and labs for learning **Hexagonal Architecture** (Ports & Adapters). Each module uses TypeScript, Jest, and a **begin → lab → solution** flow so you can practice defining ports and wiring adapters.

## Repo layout

All exercises live under `src/`:

| Module | Description |
|--------|-------------|
| **01.DI** | Dependency Injection — injecting dependencies (e.g. version1 vs version2) and testing with mocks. |
| **02.tax-calculator** | First hexagon: driving port (`forCalculateTax`), driven port (`forGetTaxRate`), and adapters. |
| **03.parking** | Parking service: driving/driven ports and adapters (repository, payment gateway, logging). |
| **04.Layered** | Layered style (controllers, repositories, models, routes) contrasted with hexagonal. |
| **05.Distributed** | Same app as local vs remote: swapping driven adapters (e.g. in-process vs HTTP) without changing the core. |

Within each module (where applicable):

- **begin** — Starter / reference code.
- **lab** — Incomplete or placeholder code for you to implement.
- **solution** — Reference implementation.

## Concepts used

- **Driving ports** — Interfaces the application exposes (e.g. `ForAcceptParkingTransaction`, `forCalculateTax`).
- **Driven ports** — Interfaces the application needs from the outside (e.g. `ForParkingRepository`, `ForGetTaxRate`).
- **Driving adapters** — Implementations that call into the hexagon (CLI, HTTP, tests).
- **Driven adapters** — Implementations of driven ports (repositories, gateways, loggers).

## Prerequisites

- Node.js
- TypeScript 5.2.2 or higher
- Jest
- (Optional) Visual Studio Code — see [Recommended VS Code extensions](#recommended-vs-code-extensions) for testing-related add-ons.

## Recommended VS Code extensions

These extensions work well with this repo’s **Jest** + TypeScript setup. Run npm commands from the `code/` folder (see [Setup and commands](#setup-and-commands)).

| Purpose | Extension | ID |
|--------|-----------|-----|
| Run tests, watch from the editor, inline pass/fail | Jest (Orta) | `orta.vscode-jest` |
| Line coverage in the editor (LCOV) | Coverage Gutters | `ryanluker.vscode-coverage-gutters` |
| Debug tests | JavaScript Debugger (Microsoft) | `ms-vscode.js-debug` |

**Install from the terminal** (with the `code` CLI on your `PATH`):

```bash
code --install-extension orta.vscode-jest
code --install-extension ryanluker.vscode-coverage-gutters
```

After `npm test`, Jest writes coverage under `code/coverage/` (including `lcov.info`). In **Coverage Gutters**, set the LCOV path to `coverage/lcov.info` when your workspace folder is `code/`, or `code/coverage/lcov.info` when the workspace is the repo root. For watch mode, use `npm run test:watch` or the Jest extension’s run/watch controls.

## Setup and commands

```
cd code
```

Install dependencies:

```bash
npm install
```

Run tests (with coverage):

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Build:

```bash
npm run build
```

Run dev (if you add an entry point that uses the snippets):

```bash
npm run dev
```

## License

ISC
