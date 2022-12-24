FROM node:18.12.1-alpine
WORKDIR /source
USER node
COPY . .
CMD ["yarn", "dev"]