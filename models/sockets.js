class Sockets {
  constructor(io) {
    this.io = io;
    this.SocketsEvents()
  }

  SocketsEvents() {
    //On Connection
    this.io.on("connection", (socket) => {
      socket.on("message", (data) => {
        console.log("Mensaje recibido-->", data);
        this.io.emit("message", data);
      });
    });
  }
}

module.exports = Sockets;
