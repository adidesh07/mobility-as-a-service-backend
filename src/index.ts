import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import { PORT, MONGO_URL } from "./env";

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Successfully connected to database')
        mongoose.connection.on('error', (error: Error) => console.log(error));
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    })
    .catch((err) => console.log('Error occurred while connecting to database\n', err));
