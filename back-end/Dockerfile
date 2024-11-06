# Stage 1: Development
FROM node:18 AS development

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code (exclude files specified in .dockerignore)
COPY . .

# Set environment variable for development
ENV NODE_ENV=development

# Expose the port that your app will run on (for development)
EXPOSE 3000

# Start the application in development mode
# Assuming you have a script in package.json like "dev": "nodemon index.js"
CMD ["npm", "run", "dev"]

# Stage 2: Production
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Set environment variable for production build
ENV NODE_ENV=production

# Build the application (this assumes there is a build process, if not, this line can be removed)
RUN npm run build

# Stage 3: Production (Minimal Image)
FROM node:18-slim AS production

# Set working directory
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package*.json /app/
COPY --from=build /app/dist /app/dist

# Set environment variable for production
ENV NODE_ENV=production

# Expose the production port
EXPOSE 3000

# Start the application in production mode
CMD ["node", "dist/index.js"]  # Adjust to your app’s entry point file
