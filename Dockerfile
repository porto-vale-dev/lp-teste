# 1. Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# 2. Build the app
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set NEXT_TELEMETRY_DISABLED to 1 to disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# 3. Run the app
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Don't need to copy public if it doesn't exist

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose the port
EXPOSE 9002

# Run the app
CMD ["node", "server.js"]
