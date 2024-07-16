import { Router } from "express";
import { login, register } from "../controllers/auth.js";
import { validBodyRequest } from "../middlewares/validBodyRequest.js";
import { authShema } from "../validSchema/authSchema.js";

const authRouter = Router();

authRouter.post("/register", validBodyRequest(authShema), register);
authRouter.post("/login", validBodyRequest(authShema), login);

export default authRouter;
