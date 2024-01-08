import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import { PORT } from "./env";

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
