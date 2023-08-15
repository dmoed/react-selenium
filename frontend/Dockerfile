#stage 1
FROM node:16-alpine as builder

MAINTAINER Don Moedjijo

WORKDIR /app

COPY package-lock.json .
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

#stage 2
FROM nginx:1.24.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html

#CMD ['nginx', '-g', 'deamon off;']
