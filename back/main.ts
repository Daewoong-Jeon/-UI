import dotenv from "dotenv";
import http from "http";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";

dotenv.config();

async function bootstrap() {
  const app: express.Application = express();
  const server: http.Server = http.createServer(app);

  app.use(
    cors({
      origin: '*',
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
  app.use(routes);

  server.listen(5000);
  console.log(`Server running on http://localhost:5000`);
}

bootstrap();