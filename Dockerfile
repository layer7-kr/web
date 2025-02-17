FROM node:23-bookworm-slim AS builder

COPY . /app
WORKDIR /app

ENV time_zone=Asia/Seoul

RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install --frozen-lockfile

ENV NODE_ENV=production

RUN pnpm run build

CMD ["pnpm", "run", "start"]