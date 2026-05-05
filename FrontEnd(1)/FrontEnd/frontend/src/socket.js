// src/socket.js
import { io } from "socket.io-client";

// Create a singleton socket
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

export const socket = io(BACKEND_URL, {
  autoConnect: false, // socket will not connect automatically
});

export const connectSocket = (roomId, username) => {
  if (!socket.connected) {
    socket.connect(); // connect only once
    socket.emit("joinRoom", { roomId, username });
  }
};
