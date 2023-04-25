import express from "express";
import { home, top100 } from "../controllers/songController";
import { join, login, search } from "../controllers/userController";
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/top100", top100)
rootRouter.get("/join", join);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

export default rootRouter;
