FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy source code
COPY . .

# Generate types and build
RUN pnpm generate:types
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
