FROM node:22-alpine AS build
WORKDIR /app
COPY main.ts tsconfig.json package.json ./
RUN npm install --save-dev typescript && npx tsc

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/main.js /usr/share/nginx/html/
COPY index.html style.css favicon.ico /usr/share/nginx/html/
COPY marius-kaufmann.700x700.webp marius-kaufmann.700x700.jpg marius-kaufmann.webp /usr/share/nginx/html/
COPY marius_kaufmann_en.pdf marius_kaufmann_de.pdf /usr/share/nginx/html/
COPY de/ /usr/share/nginx/html/de/
EXPOSE 80
