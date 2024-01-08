FROM node:16-alpine

# Create app directory
WORKDIR /app

COPY package.json .

# Install project dependencies
RUN npm i

COPY ./src/ .

EXPOSE 8080

# Run default command
CMD ["npm", "start"]
