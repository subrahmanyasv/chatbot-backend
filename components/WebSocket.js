import { createServer } from "http";
import { WebSocketServer } from "ws";
import handleMessage from "./OpenAi.js"; // Import Gemini function

const server = createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  
  ws.on("message", async (message) => {
    const userQuery = message.toString();

    const response = await handleMessage(userQuery); // Call Gemini API
    ws.send(response); // Send AI response back to client
  });

  ws.on("close", () => {});
});

server.listen(8080, () => {
  console.log("WebSocket server is running on ws://localhost:8080");
});
