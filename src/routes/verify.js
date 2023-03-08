import express from "express";

import { response, verifyPassword } from "../controller/verifyPassword.js";

export const routerVerify = express.Router();

routerVerify.get("/", response);
routerVerify.post("/", verifyPassword);