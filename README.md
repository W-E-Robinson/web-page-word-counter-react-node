# Web-page-word-counter-react-node

## Introduction
This repo was a job application task to create an application that analyses a URL for both a count of the words on the page and a breakdown of word frequency.
The repo is in two parts, the `/frontend` and `/backend`, they both contain READMEs with further information for running individually.
For instructions to run together as part of a Docker compose or as Kubernetes workloads see below.

## Running
### Docker compose (frontend container exposed on: http://localhost:3000)
```bash
chmod +x ./build-docker-images.sh
./build-docker-images.sh && docker compose -p web-page-word-counter-react-node up -d
```
```bash
docker compose -p web-page-word-counter-react-node down --remove-orphans
```

### Kubernetes workload (forwarded to: http://localhost:3000)
```bash
chmod +x ./build-docker-images.sh
./build-docker-images
```
```bash
minikube cache add web-page-word-counter-react
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
