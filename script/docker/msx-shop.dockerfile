FROM node:18.13.0-slim as base
WORKDIR /usr/src/app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm -g add pnpm
RUN pnpm install

FROM base as build
WORKDIR /usr/src/app
COPY . .
COPY --from=base /usr/src/app/node_modules ./node_modules
RUN pnpm nx run prisma:generate-all
RUN pnpm nx build shop

FROM node:18.13.0-slim as deploy
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
CMD [ "node", "/usr/src/app/dist/apps/services/shop/main.js" ]