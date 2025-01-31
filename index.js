//entry point for the server
import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import setUpWebSocket from "./components/WebSocket.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const server = createServer(app);
setUpWebSocket(server);

server.listen(port, () => {
  console.log(`Express and webSocket running on port: ${port}`);
});
