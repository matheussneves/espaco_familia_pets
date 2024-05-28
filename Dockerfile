FROM node:20
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm build

# Expose port 3000
EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "start"]

