# Use the official Node.js image as the base image
FROM node:14 as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on to the world
EXPOSE 4000

# Define the command to run the application
CMD ["npm", "start"]