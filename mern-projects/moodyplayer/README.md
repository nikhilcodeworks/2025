<!-- Auto-updated README -->
_Last updated: 2026-03-06_

# 🎵 Moodify – Mood-Based Music Recommender

Moodify is a **full-stack web app** that detects your mood using your **webcam & face-api.js** and recommends songs based on your detected emotion.
Admins can also upload songs categorized by mood, which are then served to users.

---

## 🚀 Features

* 😊 **Face Detection**: Detects facial expressions with **face-api.js**
* 🎶 **Mood-Based Songs**: Fetches songs from the backend based on detected mood
* 🎧 **Play/Pause Songs** directly in the UI
* 📤 **Admin Upload Panel**: Upload new songs with password-protected access
* ☁️ **Cloud Storage (ImageKit)**: Songs are uploaded to external storage and stored with metadata in MongoDB

---

## 🛠️ Tech Stack

**Frontend (React + Vite):**

* React + Hooks
* face-api.js (real-time mood detection)
* TailwindCSS for styling
* react-toastify for notifications

**Backend (Node.js + Express):**

* Express.js REST API
* Multer (file uploads)
* ImageKit (storage)
* MongoDB + Mongoose (song metadata)
* CORS enabled

---

## 📂 Project Structure

```
frontend/
│── src/
│   ├── App.jsx          # Main Moodify app
│   ├── Faceapi.jsx      # Face detection test component
│   └── ...  
│── public/models/       # face-api.js models
│── vite.config.js  

backend/
│── src/
│   ├── app.js           # Express setup
│   ├── database/db.js   # MongoDB connection
│   ├── models/songs.model.js
│   ├── routes/songs.routes.js
│   └── service/storage.service.js
│── server.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repo

```bash
git clone https://github.com/your-username/moodify.git
cd moodify
```

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Add an **`.env`** file inside `frontend/`:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Run the frontend:

```bash
npm run dev
```

### 3️⃣ Backend Setup

```bash
cd backend
npm install
```

Add an **`.env`** file inside `backend/`:

```env
MONGODB_URI=your_mongodb_uri
ADMIN_PASSWORD=your_admin_password

# ImageKit Config
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id/
```

Run backend server:

```bash
npm start
```

Backend runs on: `http://localhost:3000`

---

## 📡 API Endpoints

### 🎵 Songs

**Upload Song (Admin Only)**

```http
POST /up/songs
```

Form Data:

* `title`: Song title
* `mood`: Mood category (happy, sad, angry, neutral)
* `audio`: File upload (MP3/WAV)
* `password`: Admin password

**Fetch Songs by Mood**

```http
GET /up/fetch/songs?mood=happy
```

Response:

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "song_id",
      "title": "Happy Song",
      "mood": "happy",
      "audio": "https://ik.imagekit.io/..."
    }
  ]
}
```

---

## 🔒 Security

* Admin uploads are password protected (`ADMIN_PASSWORD` in `.env`)
* MongoDB stores only metadata (title, mood, audio URL)
* Songs stored securely in ImageKit

---

## 🎯 Future Improvements

* Add user playlists & favorites
* Improve mood classification with ML models
* Deploy backend + frontend to cloud (Vercel/Render + Mongo Atlas)
* Spotify/Youtube integration

---

## 📜 License

MIT License


