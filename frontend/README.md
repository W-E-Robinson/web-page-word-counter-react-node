# web-page-word-counter-react

## Introduction
This is a React application that allows the user to input a web page URL and receive both a count of the words on the page as well as a breakdown of word frequency.

## Running
### Development mode (available at: http://localhost:3000)
```bash
npm install
```
```bash
npm start
```

### Docker container (container exposed on: http://localhost:3000)
```bash
docker build --pull --no-cache -t web-page-word-counter-react .
```
```bash
docker run --rm -p 3000:3000 --name web-page-word-counter-react web-page-word-counter-react
```
