// Imports
import express, { Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import cors from "cors";
import notifier from "node-notifier";
import errorHandler from "errorhandler";
import cardQuestions from "./data/cardQuestions.js";

let moment = require("moment");
dotenv.config();

// Creating objects 
const app = express();
const port = process.env.PORT;

// TS utils
interface TimeKeeping extends Request {
  time: number;
}
// Declarations
const myLogger = function ( req: Request, res: Response, next: NextFunction) {
  console.log("LOGGED");
  console.log(`${req.method} ${req.url}`)
  next();
}
const errorNotification = (err: Error, str: string, req: Request) => {
  const title = "Error in " + req.method + " " + req.url;
  notifier.notify({title: title, message: str})
}

const requestTime = (req: TimeKeeping, res: Response, next: NextFunction) => {
  let now = moment()
  req.time = now;
  console.log(`Moment: ${req.time}`);
  next();
}

// Binding application-level middleware to an instance of app object with app.use() and app.METHOD()
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler({log: errorNotification}));
}

app.use(cors());
app.use("/static", express.static("public"));
app.use(myLogger);

app.use((req: Request, res: Response, next: NextFunction) => {
  requestTime(req as TimeKeeping, res, next);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Sorry can't find that!")
  //getting a console error about error the message not being valid JSON?
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// METHODs
app.get('/', (req: Request, res: Response) => {
  // res.send('Express + TypeScript Server is a go');
  res.send(cardQuestions);
});

app.listen(port, (err?: Error) => {
  if (err) {
    return console.error(err);
  }
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});