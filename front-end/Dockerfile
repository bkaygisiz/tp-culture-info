# Stage 1: Development (Node.js)
FROM node:18 AS development
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Set environment variable for development
ENV NODE_ENV=development

# Run the app in development mode
CMD ["npm", "run", "dev"]

# Stage 2: Build (Node.js)
FROM node:18 AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Set environment variable for production build
ENV NODE_ENV=production

# Build the application (assumes a `build` script exists in package.json)
RUN npm run build

# Stage 3: Production (Nginx)
FROM nginx:alpine AS production

# Copy build output from the previous stage to the Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

