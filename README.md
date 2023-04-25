# Melon Contest Blueprint

## How to run?

- Open this folder on VSCode.
- Click on `View` -> `Terminal`.
- Run `npm i`.
- Start `mongodb`.
- Change the `COOKIE_SECRET` on the `.env` file.
- Run `npm run dev:server`.
- Open another terminal and run `npm run dev:assets`.

## How to deploy?

- Run `npm run build`.
- Run `npm start`.

## Router

/ -> Home
/top100 -> top 100 musics
/join -> Sign Up
/login -> Login
/search -> Search

/user/:id
/user/edit -> Edit user
/user/delete -> Delete user
/user/logout
/user/favorite

/musics/:id -> listen music

/playlist/:playlistId -> see playlist
/playlist/:playlistId/edit -> edit playlist
/playlist/:playlistId/delete -> delete playlist
/playlist/:playlistId/music/:musicId -> listen music in playlist
