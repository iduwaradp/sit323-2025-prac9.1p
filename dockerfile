# Step 1: Build React frontend
FROM node:18 AS frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public
RUN npm run build

# Step 2: Build backend + serve frontend
FROM node:18
WORKDIR /app

# Copy backend source
COPY server.js ./
COPY Item.js ./
COPY seed.js ./

# Copy backend deps
COPY package*.json ./
RUN npm install

# Copy React build into backend
COPY --from=frontend-build /app/build ./build

# Expose port
EXPOSE 5000

# Start backend server
CMD ["node", "server.js"]
