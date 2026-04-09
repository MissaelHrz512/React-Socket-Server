const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const cors = require("cors")
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //Http server
    this.server = http.createServer(this.app);
    //Sockets
    this.io = socketio(this.server, {
      /*Socket Config*/
    });
  }
  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    this.app.use(cors())
  }

  socketConfig() {
    new Sockets(this.io);
  }

  startServer() {
    this.middlewares();
    this.socketConfig();
    this.server.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`);
    });
  }
}
module.exports = Server;
