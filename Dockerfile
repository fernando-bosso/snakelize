FROM node:alpine

COPY . .

RUN yarn install

CMD ["sh"]
