FROM node:23-bookworm-slim AS base

WORKDIR /app

RUN corepack enable && corepack prepare pnpm --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

FROM base AS build

COPY . .

RUN pnpm run build

FROM base AS deps

RUN pnpm install --frozen-lockfile --prod

FROM node:23-bookworm-slim AS production

WORKDIR /app

RUN corepack enable && corepack prepare pnpm --activate

ENV time_zone=Asia/Seoul
ENV NODE_ENV=production

COPY --from=build /app/.next .next
COPY --from=build /app/public public
COPY --from=build /app/package.json .
COPY --from=deps /app/node_modules node_modules

RUN mkdir -p /app/.next/cache/images && chown -R node:node /app/.next

USER node

EXPOSE 3000

CMD ["pnpm", "run", "start"]