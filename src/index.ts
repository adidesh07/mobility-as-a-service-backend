import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import expressWinston from "express-winston";
import { PORT, MONGO_URL } from "./env";
import logger from "./logger";

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true,
}));


mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
    .then(() => {
        logger.info('Successfully connected to database')
        mongoose.connection.on('error', (error: Error) => logger.error(error));
        app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`));
    })
    .catch((err) => logger.error('Error occurred while connecting to database\n', err));
