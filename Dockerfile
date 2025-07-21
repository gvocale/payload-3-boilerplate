FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm generate:types
RUN pnpm build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --prod

# Copy built application from builder stage
COPY --from=builder /home/node/app/.next ./.next
COPY --from=builder /home/node/app/public ./public
COPY --from=builder /home/node/app/payload.config.ts ./

EXPOSE 3000

CMD ["pnpm", "start"]
