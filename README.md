# Chatbot Backend (WebSocket)

This is the **backend** for a chatbot application that uses **WebSockets** for real-time communication. The backend is built with **Node.js**, **Express**, and the `ws` library to handle WebSocket connections. It also integrates **Gemini API** for generating responses.

---

## Features
- Supports **real-time** query-response interaction using **WebSockets**.
- Handles multiple client connections.
- Integrates **Gemini API** for AI-generated responses.
- Uses **Express** for basic routing (optional).
- Deployed on **Render** with WebSockets and HTTP on the same port.

---

## 📂 Project Structure
```
/backend
│── /components
│   ├── WebSocket.js  # WebSocket server setup
│   ├── OpenAi.js      # Handles AI responses
│── .env               # Environment variables (API keys, port, etc.)
│── index.js           # Entry point (Express & WebSocket server)
│── package.json       # Dependencies & scripts
│── README.md          # Project documentation
```

---


##  Deployment on Render ##

This code is currenty live on **Render** application
Link: ws://chatbot-backend-1i8i.onrender.com
You can use applications like **postman** to test the backend code.

---


##  Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - HTTP framework
- **ws** - WebSocket library
- **dotenv** - Manages environment variables
- **Gemini API** - AI response generation
---

## Future enhancements
- Integrating the database to store user data
- Enhance error handling and logging
- Implement authentication and authorization
- WebSocket connection management

