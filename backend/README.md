# Web-page-word-counter-node

## Introduction
This repo was a job application task to create an application that analyses a URL for both a count of the words on the page and a breakdown of word frequency. [Moleculer](https://www.npmjs.com/package/moleculer) needed to be used.

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

### Kubernetes workload (forwarded to: http://localhost:8080)
```bash
docker build --pull --no-cache -t web-page-word-counter-node .
```
```bash
minikube cache add web-page-word-counter-node
```
```bash
minikube start
```
```bash
minikube addons enable ingress
```
```bash
kubectl apply -f k8s.yaml
```
```bash
minikube dashboard
```
```bash
kubectl port-forward service/api 8080:80
```
```bash
minikube stop
```
