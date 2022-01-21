FROM node:12.14.1 as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# COPY .npmrc /app/.npmrc
COPY package.json /app/package.json
# COPY .yarnrc /app/.yarnrc
# COPY yarn.lock /app/yarn.lock

RUN yarn install

# RUN rm .npmrc

COPY . /app

RUN yarn build
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html

COPY ["docker-configs/default.conf", "/etc/nginx/conf.d/default.conf"]

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
