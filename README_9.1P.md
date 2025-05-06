# SIT323-2025-Prac9.1P: Adding a Database to a Containerized Application

## 📘 Overview
In this task, we enhanced our existing online-bookstore microservice by integrating a MongoDB database. The goal was to enable persistent data storage using Docker, Docker Compose, and MongoDB.

This project includes:
- A containerized Node.js backend
- A React frontend served from the same container
- MongoDB service running in its own container
- Persistent storage and database connection via environment variables

---

## ✅ Features Implemented
- Connected the backend microservice to MongoDB using Mongoose
- Configured MongoDB credentials using environment variables and Docker Secrets
- Created a Persistent Volume for MongoDB to store data
- Tested application functionality with basic CRUD operations
- Successfully ran all components using Docker Compose

---

## 🧰 Tools Used
- Visual Studio Code
- GitHub
- Node.js
- Docker & Docker Compose
- MongoDB (as container)
- Mongoose (MongoDB Node.js library)

---

## 📂 Project Structure
```
online-bookstore/
├── .env
├── docker-compose.yml
├── dockerfile
├── server.js
├── Item.js
├── seed.js
├── public/
├── src/ (React frontend)
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/sit323-2025-prac9.1p.git
cd sit323-2025-prac9.1p
```

### 2. Setup `.env` File
Create a `.env` file in the root directory with:
```
MONGO_URI=mongodb://admin:password@mongo:27017/bookstore?authSource=admin
```

### 3. Run the App with Docker Compose
```bash
docker-compose up --build
```

### 4. Access the Application
- Navigate to: http://localhost:5000
- You should see the React frontend for the bookstore
- Add and view books to test database operations

---

## 🧪 Testing
- Verified MongoDB container was running using `docker ps`
- Confirmed backend successfully connected to MongoDB (`MongoDB connected` message)
- Used the UI to perform Create and Read operations on the books collection
- Restarted the app and confirmed data persistence

---


---

## 📌 Notes
- MongoDB credentials are simplified for demonstration (should be secured in production)
- Docker volumes were used to ensure data persists across restarts
- The task was completed **locally** using Docker and **not deployed to Kubernetes**

---

## 🔗 GitHub Repository
All files, configurations, and documentation are available in this repository:
[GitHub - SIT323-2025-Prac9.1P](https://github.com/<your-username>/sit323-2025-prac9.1p)