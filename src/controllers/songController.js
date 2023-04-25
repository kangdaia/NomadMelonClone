import Song from "../models/Song";
import User from "../models/User";
import fetch from 'node-fetch';
const BASEURL = "http://ws.audioscrobbler.com/2.0";

export const home = async (req, res) => {
  res.render("home", {pageTitle: "Home"});
};

export const top100 = (req, res) => {
  res.send("top100")
}

export const favoriteMusic = (req, res) => {
  res.send("get favorite music playlist")
}

export const playMusic = (req, res) => {
  res.send("play music")
}

export const musicLyrics = (req, res) => {
  res.send("see music lyrics")
}