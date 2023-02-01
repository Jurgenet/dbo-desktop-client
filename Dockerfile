FROM node:16-alpine as dev-stage

WORKDIR /usr/src/app
COPY ./package*.json ./
RUN yarn global add @quasar/cli
COPY . .

FROM dev-stage as build-stage

RUN yarn
RUN quasar build

FROM nginx:1.17.5-alpine as prod-stage

COPY --from=build-stage ./usr/src/app/dist/spa /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
