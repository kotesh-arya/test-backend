import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Configuring the app

// Cross Origin Resource sharing configuration to the server for accepting requests from certain/all origins
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

// Setting a limit to the amount of json that the server will accept, to avoid server crash from heavy data jsons
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Setting a place where the public assets should be used
app.use(express.static("public"));

// Allows the server to access and set the cookies on the browser of the user
app.use(cookieParser());
export { app };
