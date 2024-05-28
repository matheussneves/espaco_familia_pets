# Use the official Node.js image as the base image
FROM node:20

# Install the application dependencies
RUN npm install

# Build the React application
RUN npm start

# Expose port 3000
EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "start"]
