import express from "express";
import {
    httpAddNewPlaylist,
    httpGetAllPlaylists,
    httpGetPlaylistById,
    httpUpdatePlaylistById,
} from "./playlists.controller";

const playlistsRouter = express.Router();

playlistsRouter.get("/", httpGetAllPlaylists);
playlistsRouter.post("/", httpAddNewPlaylist);
playlistsRouter.get("/:id", httpGetPlaylistById);
playlistsRouter.put("/:id", httpUpdatePlaylistById);

export default playlistsRouter;
