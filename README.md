# SIT323-2025-Prac6C: Interacting with Kubernetes (Port Forwarding)

## Overview
This task builds on Task 6P by demonstrating how to **interact with a deployed application** running on a GKE cluster using `kubectl` commands. The goal is to validate that the application is running and accessible via port-forwarding.

---

## ✅ Prerequisites
- Application already deployed to GKE (see Task 6P)
- kubectl configured to use GKE cluster
- Namespace created: `online-bookstore-s224231273`

---

## 🛠️ Step-by-Step Interaction Guide

### 1. Verify Pods and Services

```bash
kubectl get pods -n online-bookstore-s224231273
kubectl get svc -n online-bookstore-s224231273
```

✔️ You should see your pods in **Running** state, and a service with `TYPE=LoadBalancer` or `ClusterIP`.

---

### 2. Port Forward the Service

Forward traffic from **localhost:3000** to the Kubernetes service port (**80**):

```bash
kubectl port-forward svc/online-bookstore-service 3000:80 -n online-bookstore-s224231273
```

✔️ Output will look like:
```
Forwarding from 127.0.0.1:3000 -> 80
```

---

### 3. Access the Application

In your browser, open:

```
http://localhost:3000
```

🎉 The online bookstore React app should now be visible.

---

## 📸 Screenshots (Add these in your submission)
- `kubectl get pods` output
- `kubectl get svc` output
- Terminal showing `kubectl port-forward`
- Browser screenshot showing app at `http://localhost:3000`

---

## 📂 Repository Structure
```
/sit323-2025-prac6c
├── deployment.yaml
├── service.yaml
├── README.md
└── other files
```

---