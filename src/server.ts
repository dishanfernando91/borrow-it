import express from "express";
import morgan from "morgan";

import { app } from "./app";
import router from "./routes/routes";
import { requestTimer } from "./middleware/request-timer";
import errorHandler from "./middleware/error-handler";

app.use(requestTimer);
app.use(morgan(':method :url :response-time'));
app.use(express.json()); // should be before the router to parse JSON body
app.use(router);
app.use(errorHandler); // should be the last middleware

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
