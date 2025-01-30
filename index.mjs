//entry point for the server

import express from "express";
import dotenv from "dotenv";
import "./components/WebSocket.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const wsPort = process.env.WS_PORT || 8080;

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
