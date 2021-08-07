# Travix widget slots application

Widget slots application based on technical [assignment](https://github.com/Travix-International/fe-tech-test/tree/master/assignment-02).

## Deployment

Application is deployed at [heroku](https://www.heroku.com/) and available at [https://travix-widget-slot-client.herokuapp.com/](https://travix-widget-slot-client.herokuapp.com/).

## Steps to run:

run `git clone <repo>` \
run `cd <repo> && npm install` \
run `npm start`

## Available Scripts

In the project directory, you can run:

### `npm install`

Runs the app's server and client installation dependencies.

### `npm start`

Runs the app's server and client in the development mode simultaneously.

### `npm run start:server`

Runs the app's server in the development mode.\
Server is running at [http://localhost:9001](http://localhost:9001).

### `npm run start:client`

Runs the app's client in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run ci:client:test`

Used in CI/CD pipeline to run the client's `test`.

### `npm run ci:client:prettier`

Used in CI/CD pipeline to run the clients `prettier:check`

## Technical Stack

Application server is based on provided technical [assignment](https://github.com/Travix-International/fe-tech-test/tree/master/assignment-02) solution and updated with tiny changes.

### Client:

TypeScript\
React\
Redux-toolkit\
Styled Components\
Axios\
Cypress\
React-Testing-Library\
Jest\
Eslint\
Prettier\
Storybook

### Server:

Node.js\
Express.js

## CI/CD

CI/CD based on github [workflows](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow) and integration with [heroku](https://www.heroku.com/).\
Runs set up described at `.github/workflows/main.yaml`.