<!-- Auto-updated README -->
_Last updated: 2026-03-06_

# 📸 AI-Powered Social Media Caption Generator

This project is a **Node.js + Express backend** that allows users to:

* Register and log in with JWT authentication
* Upload images (using **Multer** + **ImageKit**)
* Automatically generate short, catchy captions using **Google Generative AI** (Gemini)
* Save posts with image + AI-generated caption to MongoDB

---

## 🚀 Features

* 🔐 **Authentication** – Register/Login with JWT & cookies
* 🖼️ **Image Uploads** – Stored in ImageKit
* 🤖 **AI Integration** – Generates short social-media-friendly captions
* 🗄️ **MongoDB** – Stores users & posts
* ⚡ **Express API** – REST endpoints for auth & posts

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express
* **Database**: MongoDB + Mongoose
* **AI**: Google Generative AI (`@google/genai`)
* **Storage**: ImageKit
* **Auth**: JWT + bcryptjs + cookie-parser
* **File Upload**: Multer

---

## 📂 Project Structure

```
├── server.js              # Entry point  
├── src/  
│   ├── app.js             # Express app setup  
│   ├── db/  
│   │   └── db.js          # MongoDB connection  
│   ├── models/            # Mongoose schemas  
│   │   ├── user.model.js  
│   │   └── post.js  
│   ├── controllers/       # Business logic  
│   │   ├── auth.contr.js  
│   │   └── post.contr.js  
│   ├── middlewares/  
│   │   └── auth.middleware.js  
│   ├── routes/  
│   │   ├── auth.js  
│   │   └── post.js  
│   └── service/           # External integrations  
│       ├── storag.service.js  
│       └── ai.service.js  
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/ai-caption-backend.git
cd ai-caption-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root:

```env
MongoURI=your_mongodb_connection_string
jwtsecret=your_jwt_secret

# ImageKit keys
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id/

# Google Generative AI key
Google_API_KEY=your_google_api_key
```

### 4️⃣ Run the server

```bash
npm start
```

By default, the server runs on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔐 Authentication

* **POST** `/auth/register` → Register user
* **POST** `/auth/login` → Login user

### 🖼️ Posts

* **POST** `/auth/api/post`

  * Requires JWT cookie
  * Upload an image (`image` field, multipart/form-data)
  * Returns `{ imageUrl, caption, user }`

---

## 🔒 Security Notes

* Passwords are hashed with **bcryptjs**
* JWT tokens stored in **httpOnly cookies**
* Middleware checks auth before creating posts

---

## 📝 Future Improvements

* Add user profile management
* Like/comment functionality
* Rate limiting & better error handling
* Support for multiple image formats

---

## 📜 License

MIT License

