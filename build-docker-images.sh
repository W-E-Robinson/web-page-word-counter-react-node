#!/bin/bash
docker build --pull --no-cache -t web-page-word-counter-react -f frontend/Dockerfile frontend/
docker build --pull --no-cache -t web-page-word-counter-node -f backend/Dockerfile backend/
