import express from "express";
import cookieParser from "cookie-parser";
import partnerRouter from './router/partnerRouter.js';
import customerRoutes from './router/customerRoutes.js'
import cors from "cors";
import logger from "./Middlewares/logger.js";
import errorMiddleware from "./Middlewares/errorMiddleware.js";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(logger);
app.use(errorMiddleware);


app.use('/api/partners', partnerRouter);
app.use('/api/customers', customerRoutes);



export { app };
