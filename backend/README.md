# 🔐 NestJS Auth API

This is a production-ready authentication API built using [NestJS] and [MongoDB]


## 📦 Tech Stack

- **Framework**: NestJS
- **Database**: MongoDB (via Mongoose)
- **Auth**: JWT, Passport
- **Validation**: class-validator
- **Docs**: Swagger (OpenAPI)
- **Logger**: Winston

---

## 🛠 Setup Instructions


- Clone the Repo
- Install dependencies

```bash
cd backend
```
- Create a .env file
```bash
MONGO_URI=mongodb://localhost:27017/fullstack_test
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=3600s
```

## Run the app
```bash
npm run start:dev
```
## 🧪 API Endpoints (Swagger Documentation)
- Visit: http://localhost:3000/api
