import Song from "../models/Song";
import User from "../models/User";
import fetch from 'node-fetch';

export const join = (req, res) => {
    res.send("user join")
}

export const login = (req, res) => {
    res.send("user login")
}

export const logout = (req, res) => {
    res.send("user logout")
}

export const search = (req, res) => {
    res.send("user search")
}

export const userEdit = (req, res) => {
    res.send("user edit")
}

export const userDelete = (req, res) => {
    res.send("user delete")
}

export const userSee = (req, res) => {
    res.send("user see")
}