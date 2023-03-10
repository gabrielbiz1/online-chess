const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

server.listen(3000);

app.use(express.static("src"))

io.on("connection", (socket) => {
  console.log("conectado");
});