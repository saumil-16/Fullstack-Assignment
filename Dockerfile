# Use the official Node.js image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies based on the environment
ARG NODE_ENV
RUN if [ "${NODE_ENV}" = "development" ]; \
  then npm install; \
  else npm install --only=production; \
  fi

# Copy the rest of the project files
COPY . .

# Expose port 3000
ENV PORT 3000
EXPOSE ${PORT}

# Use nodemon in development, node in production
CMD if [ "${NODE_ENV}" = "development" ]; \
  then nodemon -L server.js; \
  else node server.js; \
  fi
