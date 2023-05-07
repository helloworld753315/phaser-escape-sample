FROM node:20-bullseye-slim

WORKDIR /app
COPY ./app /app
RUN npm install