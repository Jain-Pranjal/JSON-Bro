# Use the official Node.js 20 Alpine image as the base
FROM node:20-alpine AS base
RUN npm install -g pnpm

# this will be the working directory for all the following commands
WORKDIR /app 
# now we are inside the /app directory

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm build

# Production stage
FROM node:20-alpine AS production

# Install pnpm globally in production stage
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy the built application from the base stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.mjs ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]