//Web socket file



// const server = createServer();
// const wss = new WebSocketServer({ server });

// wss.on("connection", (ws) => {
  
//   ws.on("message", async (message) => {
//     const userQuery = message.toString();

//     const response = await handleMessage(userQuery); // Call Gemini API
//     ws.send(response); // Send AI response back to client
//   });

//   ws.on("close", () => {});
// });

// server.listen(8080, () => {
//   console.log("WebSocket server is running on ws://localhost:8080");
// });
import { WebSocketServer } from "ws";
import handleMessage from "./OpenAi.js"; // Import Gemini 
const setUpWebSocket = ( server ) =>{
  const wss = new WebSocketServer({ server });
  console.log("Web socket server Started!");
  wss.on("connection", (ws)=>{
    console.log("new client connected!")
    ws.on("message", async (message)=>{
      const userQuery = message.toString();
      const response = await handleMessage(userQuery);
      ws.send(response);
    })

    ws.on("close", ()=>{
      console.log("Client disconnected!");
    });
  })
}


export default setUpWebSocket;