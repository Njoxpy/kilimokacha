# Kilimokacha

- Kilimokacha is a MERN project, Kilimokacha helps farmers grow better by giving them access to farming tips, market updates, and expert advice. We're here to support you in making your farming more productive and profitable.

- The name kilimokacha has been delivered from the word `kilimo` and `culture(kacha)`.

- Live: [kilimokacha](https://kilimokacha.vercel.app/) - Demo (3 min): {{LOOM_URL}} 
- [Issue Tracker](https://github.com/Njoxpy/kilimokacha/issues)

---

## Features
-  Auth with JWT + refresh tokens + passport Js.
- File uploads to Uploads folder using multer.
- Role-based access: admin/user.

---

## Tech Stack
- **Frontend:** React (+ Vite or CRA)
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Infra & Deploy: {Vercel} (web).
- **Testing:** Jest, Vitest, (optional: Playwright for e2e)
- **Languages:** JavaScript.

---

## ⚙️ Getting Started

### 1) Prerequisites
- Node `v20.19.4`
    ```sh
    node --version   
    ```
- MongoDB `2.5.6` (local)  
    ```sh
    mongosh --version
    ```

- NPM `11.5.2`
    ```sh
    npm --version
    ```

### 2) Clone & Install
```bash
git clone https://github.com/Njoxpy/kilimokacha.git
cd kilimokacha
# Frontend
cd frontend && npm i   # or npm i / yarn
# Backend
cd backend && npm i
```

### 3) Environment Variables
Create `.env` files using these examples.

**/api/.env**
```
PORT=8080
NODE_ENV=development
MONGO_URL=mongodb://localhost:27017/{{DB_NAME}}
JWT_SECRET={{LONG_RANDOM_STRING}}
CORS_ORIGIN=http://localhost:5173
# Optional
REDIS_URL=redis://localhost:6379
CLOUD_STORAGE_BUCKET={{BUCKET_NAME}}
```

**/web/.env**
```
VITE_API_BASE_URL=http://localhost:8080
# Optional
VITE_ANALYTICS_KEY={{KEY}}
```


---

## Contributing
See [contributing guide](./CONTRIBUTING.md) for setup, commit style (Conventional Commits), and PR tips.  
Good first issues labeled `good first issue`.

---

## 📄 License

- [MIT LIcense](./LICENSE.txt)
