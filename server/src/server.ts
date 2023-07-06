import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import compress from "compression";
import config from "./config";

class Server {
  private app;
  private server;
  private port: number;
  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT, 10) || 3000;

    this.server = http.createServer(this.app);
  }
  middlewares() {
    this.app.use(cors("*"));
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(helmet.noSniff());
    this.app.use(helmet.xssFilter());
    this.app.use(helmet.hidePoweredBy());
    this.app.use(helmet.frameguard({ action: "deny" }));
    this.app.use(compress());

    this.app.use(express.static("../client/dist"));

    this.app.use("/api", require("./routes").default);
  }

  start(): void {
    this.middlewares();

    this.server.listen(this.port, () => {
      console.log(`[SERVER]: Server running on port ${this.port}`);
      console.log(`[SERVER]: Press CTRL + C to stop the server`);
    });
  }
}

export default Server;
