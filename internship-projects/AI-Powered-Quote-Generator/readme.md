<!-- Auto-updated README -->
_Last updated: 2026-03-06_

# 📖 Quotify

Quotify is a **MERN stack web app** where users can:

* Sign up / log in securely 🔐
* Generate AI-powered quotes ✨
* View a "Quote of the Day" 📅
* Save, view, and manage favorite quotes ❤️
* Reset their password via email 📧

This project is built with **React + Node.js + Express + MongoDB** and includes authentication, quote management, and a beautiful UI.

---

## ⚡ Tech Stack

* **Frontend:** React, Tailwind CSS, React Router
* **Backend:** Node.js, Express
* **Database:** MongoDB (Mongoose)
* **Auth:** JWT (JSON Web Token), bcrypt
* **Email:** Nodemailer
* **Others:** Helmet, Compression, CORS

---

## 📂 Project Structure

```
Quotify/
 ├── backend/
 │   ├── config/
 │   │   └── db.js
 │   ├── controllers/
 │   │   ├── quoteController.js
 │   │   └── userController.js
 │   ├── models/
 │   │   └── user.js
 │   ├── routes/
 │   │   ├── quoteRoutes.js
 │   │   └── userRoutes.js
 │   ├── utils/
 │   │   └── mailer.js
 │   └── server.js
 │
 ├── frontend/
 │   ├── src/
 │   │   ├── components/
 │   │   │   ├── Auth/
 │   │   │   │   ├── AuthUI.jsx
 │   │   │   │   ├── LoginForm.jsx
 │   │   │   │   ├── SignupForm.jsx
 │   │   │   │   ├── ResetPasswordForm.jsx
 │   │   │   │   └── QuoteSection.jsx
 │   │   │   └── Quotify/
 │   │   │       ├── Quotify.jsx
 │   │   │       ├── Header.jsx
 │   │   │       ├── QuoteGenerator.jsx
 │   │   │       ├── QuoteSlider.jsx
 │   │   │       └── FavoritesModal.jsx
 │   │   ├── utils/
 │   │   │   └── validators.js
 │   │   ├── App.jsx
 │   │   └── App.css
 │   └── package.json
 │
 ├── .env
 ├── README.md
 └── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/quotify.git
cd quotify
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

Run the server:

```bash
npm start
```

---

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`
Backend runs on: `http://localhost:5000`

---

## 🚀 Features

✅ User authentication (Signup/Login/Logout)
✅ JWT-based secure sessions
✅ Reset password via email
✅ AI-powered Quote Generator (random category support)
✅ Daily "Quote of the Day"
✅ Save & manage favorite quotes
✅ Responsive UI with TailwindCSS

---

## 📸 Screenshots

*(Add screenshots/gifs of your app here — login page, quote generator, favorites, etc.)*

---

## 🛠️ API Endpoints

### User Routes (`/api/user`)

* `POST /signup` → Register user
* `POST /login` → Login user
* `POST /reset-password` → Send reset email
* `POST /reset-password/:token` → Reset password

### Quote Routes (`/api/quote`)

* `POST /generate` → Generate a new quote
* `GET /quote-of-the-day` → Get daily quote
* `GET /favorites` → Get user favorites
* `POST /favorite` → Save a favorite quote
* `DELETE /favorite/:id` → Remove a favorite
* `DELETE /favorites` → Clear all favorites

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

