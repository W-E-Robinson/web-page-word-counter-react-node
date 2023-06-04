# web-page-word-counter-frontend

This is a React application that allows the user to input a web page URL and receive both a count of the words on the page as well as a breakdown of word frequency.

Accompanying backend repo: [web-page-word-counter-backend](https://github.com/W-E-Robinson/web-page-word-counter-backend).

## Run app in development mode

Install dependencies

```bash
npm install
```

Create a .env file with a varible value of 3000 (when the backend is run in development mode) or 30099 (when the backend is in a kubernetes cluster)

```bash
REACT_APP_BACKEND_PORT_NUMBER=3000 OR 30099
```

Start the server

```bash
npm start
```

## Run tests

```bash
npm test
```

## Used git hooks

[pre-push: eslint + typecheck + jest](https://github.com/W-E-Robinson/git-hooks/blob/main/pre-push/eslint-tsc-jest.sh)

## Tech Stack

React, Typescript, Redux, Redux-Saga, MUI, Axios, Docker, Jest, React Testing Library, Sass, ESLint
