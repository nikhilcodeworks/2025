const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");

function initServer(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*", // adjust for your frontend domain
      credentials: true
    }
  });

  // middleware to check auth
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error("Authentication error"));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWTSECRET);
      socket.userId = decoded.id; // attach userId for later use
      next();
    } catch (err) {
      console.log("Socket auth failed", err.message);
      return next(new Error("Authentication error"));
    }
  });

  io.on("connection", (socket) => {
    console.log("✅ New authenticated connection:", socket.id, "User:", socket.userId);

    socket.on("disconnect", () => {
      console.log("❌ Disconnected:", socket.id);
    });
  });

  return io;
}

module.exports = initServer;