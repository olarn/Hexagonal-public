# Copilot Instructions for Hexagonal Architecture Training

## Project Overview
This is a TypeScript/Node.js training project demonstrating **hexagonal architecture (ports and adapters pattern)**. The codebase teaches dependency injection principles through progressive examples, comparing tightly-coupled vs. loosely-coupled implementations.

## Architecture Patterns

### Hexagonal Pattern Structure
The project uses a strict port-interface-adapter pattern:

- **Driving Ports** (`DrivingPorts/`): Interfaces defining what external actors can do with the domain
  - Example: `ForCalculateTax` interface in `src/taxCalculator/solution/DrivingPorts/`
  - Domain implementation implements this interface

- **Driven Ports** (`DrivenPorts/`): Interfaces defining what the domain needs from external services
  - Example: `ForGetTaxRate` interface in `src/taxCalculator/solution/DrivenPorts/`
  - Adapters (repositories) implement these interfaces

- **Application Core** (`TaxCalculatorApp/`): Domain logic that depends only on port interfaces
  - Example: `TaxCalculator` class receives `ForGetTaxRate` via constructor injection

### Naming Convention: `For*` Prefix
Port interfaces are named with `For` prefix to indicate their purpose:
- `ForCalculateTax` - "for calculating tax" (driving port)
- `ForGetTaxRate` - "for getting tax rate" (driven port)

This naming makes the direction of dependency and intent immediately clear.

## Key Files & Patterns

### Progressive Learning Paths
1. **Tight Coupling (Anti-pattern)**
   - `src/taxCalculator/begin/taxCalculator.ts` - Direct instantiation of dependencies
   - `src/dependency/version1.test.ts` - Using spies on prototype to mock

2. **Loose Coupling (Hexagonal)**
   - `src/taxCalculator/solution/` - Full hexagonal implementation with DI
   - `src/dependency/version2.test.ts` - Constructor injection with interface-based mocking

### Test Strategy
- All test files follow `.test.ts` suffix
- Tests instantiate the domain with injected adapters
- Mocking via `jest.spyOn()` on class prototypes (legacy) or passing mock objects (preferred)
- Example: `src/taxCalculator/solution/taxCalculator.test.ts`

## Development Workflow

### Commands
```bash
npm run dev      # Run app with nodemon (watches for changes)
npm test         # Run Jest with watch mode and coverage
npm run build    # Compile TypeScript to JavaScript
```

### Testing
- Jest runs in watch mode by default with coverage reporting
- Tests discover files matching `*.test.ts` pattern
- Coverage reports generated in `coverage/` directory

## TypeScript Configuration
- `baseUrl: "src"` - Imports resolve from src directory (e.g., `import "./taxCalculator"`)
- `target: "es2016"` - Modern JavaScript target
- `module: "commonjs"` - Node.js module system
- `rootDir: "./src"` - Source root for compilation

## When Adding New Features

1. **Define the port interface first** (in `DrivenPorts/` or `DrivingPorts/`)
2. **Implement in the core domain** using only port interfaces
3. **Create adapters** that implement the driven port interfaces
4. **Update tests** to inject the adapter, not mock internal dependencies
5. **Avoid** instantiating collaborators inside the class - inject them

## Anti-Patterns to Avoid
- Creating dependencies inside class constructors (tight coupling)
- Depending on concrete implementations instead of interfaces
- Importing from sibling directories outside ports structure
- Skipping the port interface when dependencies seem "obvious"
