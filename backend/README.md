# Web-page-word-counter-node

## Introduction
This repo contains a Node.js application that analyses a URL for both a count of the words on the page and a breakdown of word frequency. [Moleculer](https://www.npmjs.com/package/moleculer) needed to be used as part of a job application.

## API Reference

### Get word breakdown for given URL
```http
  GET /count?url=URL
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**. Target URL |

## Running
### Development mode (available at: http://localhost:8080)
```bash
npm install
```
```bash
npm run dev
```

### Docker container (container exposed on: http://localhost:8080)
```bash
docker build --pull --no-cache -t web-page-word-counter-node .
```
```bash
docker run -p 8080:8080 --name web-page-word-counter-node web-page-word-counter-node
```
