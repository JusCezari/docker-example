# Use node 6
FROM node:stretch

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install necessary packages
RUN apt update
RUN echo Y | apt-get install netcat

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3000