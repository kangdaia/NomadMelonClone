import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    rank: Number,
    title: { type: String, default: 'Title' },
    artist: { type: String, default: 'artist' },
    album: { type: String, default: '' },
    playcount: { type: Number, default: 0 },
    coverimg: { type: String, default: 'https://i.ibb.co/nwf62F3/75.png' }
});

const Song = mongoose.model("Song", songSchema);

export default Song;
