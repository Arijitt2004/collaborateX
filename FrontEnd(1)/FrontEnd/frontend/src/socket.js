// src/socket.js
import { io } from "socket.io-client";

// Create a singleton socket
export const socket = io("http://localhost:3001", {
  autoConnect: false, // socket will not connect automatically
});

export const connectSocket = (roomId, username) => {
  if (!socket.connected) {
    socket.connect(); // connect only once
    socket.emit("joinRoom", { roomId, username });
  }
};
