import express from "express";
import { playMusic, musicLyrics } from "../controllers/songController"

const musicRouter = express.Router();

musicRouter.get("/:id",  playMusic);
musicRouter.get("/:id/lyrics",  musicLyrics);

export default musicRouter