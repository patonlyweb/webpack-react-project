# Stage 1 - On build dans un docker
FROM node:10-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build


# Stage 2 - On construit l'image de déploiement, même si on aurait pu se contenter de servir via un montage
FROM nginx:1.14-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html/dist
COPY --from=build-deps /usr/src/app/index.html /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
