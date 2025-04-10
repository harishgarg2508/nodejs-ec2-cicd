# 🚀 Node.js JSON API with CI/CD & AWS EC2 Deployment

This is a lightweight Node.js API that serves static JSON data and demonstrates a full DevOps pipeline with:

- ✅ Docker containerization  
- ✅ GitHub Actions CI/CD pipeline  
- ✅ Automated deployment to AWS EC2  

---

### 🖼️ Project Snapshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/608ef471-8766-4b57-bc3e-0784c0250aa4" width="48%" />
  <img src="https://github.com/user-attachments/assets/318f0aea-ad03-4829-b8e8-e79a383f5191" width="48%" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/8bca4c4d-9fa8-4c28-9d4d-2b5c9ade67b5" width="48%" />
  <img src="https://github.com/user-attachments/assets/eafb347f-da31-4c6f-8cdc-6a8a18d64517" width="48%" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/026164ba-cbf5-4e78-acd7-f5a95eb486bd" width="48%" />
  <img src="https://github.com/user-attachments/assets/b6f46ba0-c68d-4469-8f59-878f9a16851a" width="48%" />
</p>

---

## 📁 Project Structure

```bash
├── server.js               # Express server serving JSON data 
├── users.json              # Static mock user data 
├── Dockerfile              # For containerizing the app 
├── .github/workflows/     
│   └── deploy.yml          # CI/CD GitHub Actions workflow 
├── package.json
└── README.md
```

<h1>📦 Technologies Used</h1>
  <h2>Node.js + Express    
  <h2>Docker
  <h2>GitHub Actions for CI/CD
 <h2>AWS EC2 for hosting

![image](https://github.com/user-attachments/assets/e25a3768-d8ab-4b76-8ad2-c6618326ea08)


<h1>🔁 CI/CD Pipeline with GitHub Actions</h1>
  Every push to the main branch triggers the following steps:

🔨 Build the Docker image

📤 Push it to Docker Hub

🔐 SSH into AWS EC2 instance

📥 Pull the latest image

🚀 Restart the container with the updated version

  Workflow File:
  .github/workflows/deploy.yml

<h1>☁️ Deployment to AWS EC2</h1>
  <h2>EC2 instance runs Docker
  GitHub Actions uses SSH for deployment
  Application runs on port public ip mapped everytime</h2>

🙌 Author
Harish Garg
🔗 <a href="https://harishgarg.tech" target="_blank">Portfolio</a>
