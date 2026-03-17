<!-- Auto-updated README -->
_Last updated: 2026-03-06_


# 🤖 AI Chatbot with Gemini API (MERN + Socket.IO + React)

A **real-time AI chatbot** built using **MERN stack, Socket.IO, and Google Gemini API**.  
The chatbot supports **short-term memory** (remembers recent conversation context), real-time streaming, and a responsive chat UI.

---

## 🚀 Features

- **Real-Time Chat** – Powered by Socket.IO for low-latency communication.
- **Google Gemini AI Integration** – Uses `gemini-2.5-flash` for fast and intelligent responses.
- **Short-Term Memory** – Maintains recent conversation history for context (configurable).
- **MERN Stack** – MongoDB, Express.js, React.js, Node.js.
- **Responsive UI** – Built with React + Tailwind CSS for a clean chat experience.
- **Typing Indicator & Chat History** – Provides a natural conversation feel.
- **Secure Config** – Environment variables for API keys and frontend/backend URLs.

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS, Socket.IO Client  
**Backend:** Node.js, Express.js, Socket.IO, Google GenAI SDK  
**Database (optional):** MongoDB (can be used for persistent chat history)  
**Deployment:** Vercel (frontend), Render/Heroku (backend)  

---

## 📂 Project Structure

```

├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── service
│   │   │   └── ai.service.js
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── components
│   │   │   ├── Header.jsx
│   │   │   ├── MessagesArea.jsx
│   │   │   └── Footer.jsx
│   └── .env
│
└── README.md

````

---

## ⚙️ Installation

### 1️⃣ Clone Repo
```bash
git clone https://github.com/your-username/ai-chatbot-gemini.git
cd ai-chatbot-gemini
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
GOOGLE_API_KEY=your_google_api_key
FRONTEND_URI=http://localhost:5173
```

Run backend:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```
VITE_BACKEND_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

---

## 🧠 Short-Term Memory

The chatbot maintains the **last N messages** (configurable in backend):

```js
const MEMORY_LIMIT = 6; // keeps last 3 user+AI exchanges
```

This allows the bot to stay **context-aware** without storing huge chat histories.

---

## 🎯 Future Improvements

* 🔹 Streaming responses (typing effect from Gemini API).
* 🔹 User authentication & persistent chat history with MongoDB.
* 🔹 Multi-user memory management.
* 🔹 Dark mode + mobile optimization.

---

## 📸 Screenshots

<img width="564" height="916" alt="image" src="https://github.com/user-attachments/assets/95cae2db-fd65-4248-89b2-f8538c518bff" />


---

## 📜 License

MIT License © 2025 

