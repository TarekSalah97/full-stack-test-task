# 🔐 NestJS Auth API

This is a production-ready authentication API built using [NestJS] and [MongoDB]

---

## 🚀 Features

- Signup & Signin with validation
- Password hashing using bcrypt
- JWT authentication with access token
- Protected route (`/protected`)
- Environment-based config
- Swagger API docs
- Winston logging

---

## 📦 Tech Stack

- **Framework**: NestJS
- **Database**: MongoDB (via Mongoose)
- **Auth**: JWT, Passport
- **Validation**: class-validator
- **Docs**: Swagger (OpenAPI)
- **Logger**: Winston

---

## 🛠 Setup Instructions


```bash

cd backend
Install dependencies
npm install
Create a .env file

MONGO_URI=mongodb://localhost:27017/fullstack_test
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=3600s

Run the app
npm run start:dev

🧪 API Endpoints
Method	Endpoint	Description
POST	/auth/signup	Register a new user
POST	/auth/signin	Login and get token
GET	/protected	Access protected content

🧾 Swagger Documentation
Visit: http://localhost:3000/api

Use the Authorize 🔐 button to test protected routes with JWT.

✅ Example Sign In Response
json
Copy
Edit
{
  "accessToken": "your.jwt.token.here"
}
Use this token in the Authorization header