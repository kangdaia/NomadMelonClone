import express from "express";
import {seeUser, userEdit, userDelete, logout} from "../controllers/userController"
import { favoriteMusic } from "../controllers/songController"

const userRouter = express.Router();

userRouter.get("/logout", logout)
userRouter.get("/edit", userEdit);
userRouter.get("/delete", userDelete);
userRouter.get("/favorite", favoriteMusic)
userRouter.get(":id", seeUser);

export default userRouter;