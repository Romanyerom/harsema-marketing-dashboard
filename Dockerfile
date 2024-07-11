# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN npm run build

# Install http-server to serve the build files
RUN npm install -g http-server

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["http-server", "build", "-p", "5000"]

