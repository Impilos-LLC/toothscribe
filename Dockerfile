# Stage 1: Build the React application
FROM node:lts-alpine3.22 AS build-stage
WORKDIR /app
# RUN apk add --no-cache build-base python3 git
# Copy package.json and package-lock.json (or yarn.lock) first
COPY package*.json ./
# Install only production dependencies
RUN npm install
# Copy the rest of your application code
COPY . .
# Build the application for production
# This creates the optimized static files in the 'dist' directory (default for Vite)
RUN npm run build
# Stage 2: Serve the built application
# Using a slim Node.js image
FROM node:lts-alpine3.22 AS production-stage
WORKDIR /app
# Copy only package.json and package-lock.json for production dependencies
COPY package*.json ./
# Install *only* `vite` as a production dependency for `vite preview`
# You might need to add vite to your "dependencies" in package.json if it's currently only in devDependencies
# Or, explicitly install it here:
RUN npm install --production
RUN npm install vite
# Copy the built assets from the build-stage
COPY --from=build-stage /app/dist ./dist
COPY vite.config.ts ./
# Azure App Service will expose a port via the PORT environment variable
# Make sure your container listens on this port.
# The `start` script defined in package.json will use this.
EXPOSE 5173
# Command to run your application:
# This will execute the "start" script from your package.json
CMD ["npm", "run", "start"]