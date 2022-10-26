import express from "express";
import {
    httpAddNewPlaylist,
    httpAddTracksToPlaylist,
    httpDeletePlaylistById,
    httpGetAllPlaylists,
    httpGetPlaylistById,
    httpUpdatePlaylistById,
} from "./playlists.controller";

const playlistsRouter = express.Router();

playlistsRouter.get("/", httpGetAllPlaylists);
playlistsRouter.post("/", httpAddNewPlaylist);
playlistsRouter.get("/:id", httpGetPlaylistById);
playlistsRouter.patch("/:id", httpUpdatePlaylistById);
playlistsRouter.patch("/addTracks/:id", httpAddTracksToPlaylist);
playlistsRouter.delete("/:id", httpDeletePlaylistById);

export default playlistsRouter;
