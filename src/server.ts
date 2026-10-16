import express from "express";
import morgan from "morgan";

import { app } from "./app";
import router from "./routes/routes";
import { requestTimer } from "./middleware/request-timer";

app.use(requestTimer);
app.use(morgan(':method :url :response-time'));

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
