import express, {Express, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import cors from "cors";
import cardQuestions from "./data/cardQuestions";

dotenv.config();

const app = express();
const port = process.env.PORT;

const myLogger = function ( req: Request, res: Response, next: NextFunction) {
  console.log("LOGGED");
  console.log(`${req.method} ${req.url}`)
  next();
}

interface TimeKeeping extends Request {
  time: number;
}

const requestTime = (req: TimeKeeping, res: Response, next: NextFunction) => {
  req.time = Date.now();
  console.log(`${req.time}`);
  next();
}

app.use(cors());
app.use(myLogger);
app.use(requestTime);

app.get('/', (req: Request, res: Response) => {
  // res.send('Express + TypeScript Server is a go');
  res.send(cardQuestions)

  console.log("req: ", req);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});