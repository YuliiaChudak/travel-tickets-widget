## Preconditions

Run server from the server's directory: 
run `cd ./server` \
run `npm start` \
check that it's running at [http://localhost:9001](http://localhost:9001)

## Steps to run:

run `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

Launches the test runner in the interactive watch mode and checks coverage.\
Interactive report with coverage is accessible at `client/coverage/lcov-report/index.html` after test run complete.

### `npm run test:e2e`

Launches the [cypress](https://www.cypress.io/) test runner in the browser emulator.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run prettier:fix`

Fixes the all codes issues regarding `.prettierrc.json`.

### `npm run prettier:check`

Checks the all codes issues and is used in CI.

### `npm run storybook`

Starts [Storybook](https://storybook.js.org/) locally and output the address.

### `npm run build-storybook`

Builds [Storybook](https://storybook.js.org/) as a static web application.