# Answers on 2, 5 [questions](https://github.com/Travix-International/fe-tech-test/blob/master/questions/README.md)

## What are the tools that are essential in developing FE applications with high quality?
[TypeScript](https://www.typescriptlang.org/), [Prettier](https://prettier.io/docs/en/cli.html), [Eslint](https://eslint.org/), tests.

## 5. What are the parameters to take into account before adding a new library to the project?
### Functionality
Determine whether it provides the necessary functionality to cover requirements.

### Extensibility
Check whether library supports extending for further business requirements.

### Examples
Library should have examples of code usage with different libraries, frameworks and provide own api.

### Well maintained
Library has api, updated technical stack, developers works on its improvement, active in github community to cover and fix issues, user's discussions.

### Code coverage
Library should be well covered with tests.

### Bundle size
Library should not have a large bundle size comparing to similar libraries as it impacts badly the FE performance.

### No active vulnerabilities
Check library using vulnerability scanner like [Snyk](https://snyk.io/) before making decision

### Peer dependencies
Prefer selection library with less peer dependencies.
