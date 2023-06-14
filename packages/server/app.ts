import express, {Express, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "connect";
import notifier from "node-notifier";
import errorHandler from "errorhandler";
import cardQuestions from "./data/cardQuestions.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const myConnect = connect();

interface TimeKeeping extends Request {
  time: number;
}

const errorNotification = (err: Error, str: string, req: Request) => {
  const title = "Error in " + req.method + " " + req.url;
  notifier.notify({title: title, message: str})
}

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler({log: errorNotification}));
}


app.use(cors());

const myLogger = function ( req: Request, res: Response, next: NextFunction) {
  console.log("LOGGED");
  console.log(`${req.method} ${req.url}`)
  next();
}
app.use(myLogger);

app.use((req: Request, res: Response, next: NextFunction) => {
  requestTime(req as TimeKeeping, res, next);
});


const requestTime = (req: TimeKeeping, res: Response, next: NextFunction) => {
  req.time = Date.now();
  console.log(`${req.time}`);
  next();
}



app.get('/', (req: Request, res: Response) => {
  // res.send('Express + TypeScript Server is a go');
  res.send(cardQuestions);
});

app.listen(port, (err?) => {
  if (err) {
    return console.error(err);
  }
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});