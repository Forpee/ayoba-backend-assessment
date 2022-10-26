import { Request, Response } from "express";
import {
    addNewPlaylist,
    deletePlaylistById,
    existsPlaylistWithId,
    getAllPlaylists,
    getPlaylistById,
    updatePlaylistById,
} from "../../models/playlists.model";
import { isPlaylist } from "../../utils/typeguards";

export const httpGetAllPlaylists = (req: Request, res: Response) => {
    return res.status(200).json(getAllPlaylists());
};

export const httpAddNewPlaylist = (req: Request, res: Response) => {
    const playlistData = req.body;

    if (!isPlaylist(playlistData)) {
        return res.status(400).json({ error: "Invalid playlist data" });
    }

    return res.status(201).json(addNewPlaylist(playlistData));
};

export const httpGetPlaylistById = (req: Request, res: Response) => {
    const { id } = req.params;

    if (!existsPlaylistWithId(id)) {
        return res.status(404).json({ error: "Playlist not found" });
    }

    return res.status(200).json(getPlaylistById(id));
};

export const httpUpdatePlaylistById = (req: Request, res: Response) => {
    const { id } = req.params;
    const playlistData = req.body;

    if (!isPlaylist(playlistData)) {
        return res
            .status(400)
            .json({ error: "Missing required playlist property" });
    }

    if (!existsPlaylistWithId(id)) {
        return res.status(404).json({ error: "Playlist not found" });
    }

    return res.status(200).json(updatePlaylistById(id, playlistData));
};

export const httpDeletePlaylistById = (req: Request, res: Response) => {
    const { id } = req.params;

    if (!existsPlaylistWithId(id)) {
        return res.status(404).json({ error: "Playlist not found" });
    }

    deletePlaylistById(id);
    return res.status(200).json({ message: "Playlist deleted" });
};
