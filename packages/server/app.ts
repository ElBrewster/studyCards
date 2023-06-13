import express, {Express, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

const myLogger = function ( req: Request, res: Response, next: NextFunction) {
  console.log("LOGGED");
  next();
}

app.use(myLogger);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is a go');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});