# SIT323-2025-Prac5D: Dockerization and Publishing to Cloud

## Overview
This repository contains the Dockerized version of the Online Bookstore microservice. It demonstrates how to build, push, and run a Docker container from a private cloud registry.

## Prerequisites
- Node.js (v18 or higher)
- Docker
- Google Cloud SDK (`gcloud`)
- Git

## Steps to Set Up the Project

### 1. Clone the repository
Clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/sit323-2025-prac5d.git
2. Build the Docker image
Navigate to the project directory and run:

bash
Copy
Edit
docker build -t online-bookstore .
3. Authenticate with Google Cloud Artifact Registry
Authenticate using gcloud:

bash
Copy
Edit
gcloud auth configure-docker australia-southeast2-docker.pkg.dev
4. Push the Docker image to Google Cloud
Push the built Docker image to your Artifact Registry:

bash
Copy
Edit
docker push australia-southeast2-docker.pkg.dev/sit323-25t1-muthugala-7935cea/online-bookstore-repo/online-bookstore:latest
5. Run the Docker image locally
You can run the image locally to test the service:

bash
Copy
Edit
docker run -p 3000:3000 australia-southeast2-docker.pkg.dev/sit323-25t1-muthugala-7935cea/online-bookstore-repo/online-bookstore:latest
Visit http://localhost:3000 to access the application.