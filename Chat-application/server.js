require("dotenv").config();
const { Socket } = require("dgram");
const app = require("./src/app");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const generateResponse = require("./src/service/ai.service");

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });

  socket.on("ai-message", async (prompt) => {
    const response = await generateResponse(prompt);
    socket.emit("ai-reply", response);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
