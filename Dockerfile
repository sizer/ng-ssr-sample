FROM node:10.15-alpine

WORKDIR /
ENV HOST 0.0.0.0

RUN apk add yarn

VOLUME [ "/web/node_modules", "/bff/node_modules" ]

ADD web /web
ADD bff /bff

EXPOSE 4000:4000

CMD [ "/bin/sh", "-c", "cd web && yarn run build:server && cd ../bff && yarn run bff:start" ]
