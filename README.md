
# SIT323-2025-Prac6P: Online Bookstore Deployment on GKE with Artifact Registry

## Overview
This project demonstrates deploying a React-based online bookstore application to a **Google Kubernetes Engine (GKE)** cluster using **Google Artifact Registry** for container image hosting.

---

## ✅ Prerequisites
- Google Cloud Project with billing enabled
- GKE and Artifact Registry APIs enabled
- Google Cloud SDK installed and authenticated
- Docker installed
- kubectl installed

---

## 🚀 Step-by-Step Deployment Guide

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/online-bookstore.git
cd online-bookstore
```

---

### 2. Build Docker Image
```bash
docker build -t online-bookstore .
```

---

### 3. Push to Artifact Registry

#### Authenticate Docker with Google Cloud:
```bash
gcloud auth configure-docker australia-southeast2-docker.pkg.dev
```

#### Tag and push:
```bash
docker tag online-bookstore australia-southeast2-docker.pkg.dev/sit323-25t1-muthugala-7935cea/online-bookstore-repo/online-bookstore:v1
docker push australia-southeast2-docker.pkg.dev/sit323-25t1-muthugala-7935cea/online-bookstore-repo/online-bookstore:v1
```

---

### 4. Update Deployment File

Ensure the image in `deployment.yaml` is:
```yaml
image: australia-southeast2-docker.pkg.dev/sit323-25t1-muthugala-7935cea/online-bookstore-repo/online-bookstore:v1
```

---

### 5. Create GKE Cluster (if not created)
Create cluster via Console or CLI:
```bash
gcloud container clusters create bookstore-cluster   --region australia-southeast2   --num-nodes=3
```

---

### 6. Connect `kubectl` to GKE
```bash
gcloud container clusters get-credentials bookstore-cluster --region australia-southeast2
```
✔️ You should see context like:
```
gke_sit323-25t1-muthugala-7935cea_australia-southeast2_bookstore-cluster
```

---

### 7. Create Namespace
```bash
kubectl create namespace online-bookstore-s224231273
```
*If it already exists, ignore the error.*

---

### 8. Apply Deployment and Service
```bash
kubectl apply -f deployment.yaml -n online-bookstore-s224231273
kubectl apply -f service.yaml -n online-bookstore-s224231273
```

---

### 9. Monitor Pod Status
```bash
kubectl get pods -n online-bookstore-s224231273
```

✔️ Look for all pods showing `Running`.  
If any show `ImagePullBackOff`, double-check the image URL in `deployment.yaml`.

---

### 10. Wait for External IP
Check service status:
```bash
kubectl get svc -n online-bookstore-s224231273
```

⏳ The `EXTERNAL-IP` may take a minute or two to appear.

✅ Example:
```
NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
online-bookstore-service   LoadBalancer   34.118.225.110   34.129.55.41    80:31234/TCP   41m
```

---

### 11. Access the App
Open the external IP in your browser:
```
http://34.129.55.41
```

🎉 Your app is now live and running on GKE!



