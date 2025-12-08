# 📨 Real-Time Chat App (MERN + Socket.io)

A full-stack, real-time chat application built using the MERN stack with Socket.io for instant messaging. Includes secure JWT auth, online user presence, clean UI components, and reliable error handling.

---

## ✨ Features

- ⚡ **Real-time messaging** with Socket.io  
- 🔐 **JWT Authentication & Authorization**  
- 🟢 **Live online/offline user status**  
- 🧠 **Global state with Zustand**  
- 🎨 **TailwindCSS + DaisyUI UI**  
- 🐞 **Consistent error handling (client + server)**  
- 🚀 **Free-tier friendly deployment**  
- 🔥 **MERN architecture**  

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- React  
- Zustand  
- TailwindCSS  
- DaisyUI  
- Socket.io Client  

### 🗄️ Backend
- Node.js  
- Express  
- MongoDB + Mongoose  
- Socket.io  
- JWT  

---

## 📁 Project Structure

root/
├── client/
│ ├── src/
│ ├── components/
│ ├── hooks/
│ ├── state/ // Zustand
│ └── ...
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── socket/
└── ...


---

## 🔐 Authentication Flow

1. 📝 User logs in or registers  
2. 🔑 Server returns a JWT  
3. 📦 Client stores the token  
4. 🔒 Protected routes require JWT  
5. 🔗 Socket.io handshake validates user  

---

## 💬 Real-Time Messaging

- ⚡ Instant message delivery  
- 🔄 Broadcast updates to all connected users  
- 🟢 Live presence indicators  

---

## 🧪 Error Handling

- 🎯 Predictable API errors (Express middleware)  
- 🧱 Client-side error boundaries  
- 🔔 Toast notifications on failures  

---

## 🚀 Deployment

**Chat-App:** Render

Don’t forget to configure environment variables.

---

## 🔧 Installation

### 1️⃣ Clone

git clone <repo-url>
cd project

### 2️⃣ Install dependencies

cd frontend && npm install
cd ../backend && npm install

### 3️⃣ Environment Variables

**backend/.env**

MONGO_URI=
JWT_SECRET=
CLIENT_URL=

**client/.env**

VITE_API_URL=

### 4️⃣ Development

cd server && npm run dev
cd client && npm run dev


---

## 📌 Possible Future Enhancements
- ✏️ Typing indicators  
- 👥 Group chats  
- 📎 File attachments  
- 👁️ Read receipts  
- 🔔 Push notifications  

