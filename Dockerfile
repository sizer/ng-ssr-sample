FROM node:10.15-alpine

WORKDIR /web
ENV HOST 0.0.0.0

RUN apk add yarn

VOLUME [ "/web/node_modules" ]

ADD web /web

EXPOSE 4000:4000

CMD [ "/bin/sh", "-c", "yarn run bff:start" ]
