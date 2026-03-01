FROM node:22-alpine AS build
WORKDIR /app
COPY src/main.ts ./src/
COPY tsconfig.json package.json ./
RUN npm install --save-dev typescript && npx tsc

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/main.js /usr/share/nginx/html/
COPY src/index.html src/style.css src/favicon.ico /usr/share/nginx/html/
COPY src/de/ /usr/share/nginx/html/de/
COPY assets/ /usr/share/nginx/html/assets/
EXPOSE 80
