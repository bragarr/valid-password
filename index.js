import express from "express";
import cors from "cors";
import { routerVerify } from "./routes/verify.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/verify", routerVerify);

app.listen(port);
