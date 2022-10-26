import { Response, Request } from "express";
import {
    addNewTrack,
    deleteTrackById,
    existsTrackWithId,
    getAllTracks,
    getTrackById,
    updateTrackById,
} from "../../models/tracks.model";
import { isTrack } from "../../utils/typeguards";

export const httpGetAllTracks = (req: Request, res: Response) => {
    res.status(200).json(getAllTracks());
};

export const httpAddNewTrack = (req: Request, res: Response) => {
    const trackData = req.body;

    if (!isTrack(trackData)) {
        return res.status(400).json({
            error: "Missing required track property",
        });
    }

    const newTrack = addNewTrack(trackData);
    res.status(201).json(newTrack);
};

export const httpGetTrackById = (req: Request, res: Response) => {
    const { id } = req.params;
    const track = getTrackById(id);
    if (track) {
        res.status(200).json(track);
    } else {
        res.status(404).json({ error: "Track not found" });
    }
};

export const httpUpdateTrackById = (req: Request, res: Response) => {
    const { id } = req.params;
    const trackData = req.body;

    if (!isTrack(trackData)) {
        return res
            .status(400)
            .json({ error: "Missing required track property" });
    }

    if (existsTrackWithId(id)) {
        const updatedTrack = updateTrackById(id, trackData);
        res.status(200).json(updatedTrack);
    } else {
        res.status(404).json({ error: "Track not found" });
    }
};

export const httpDeleteTrackById = (req: Request, res: Response) => {
    const { id } = req.params;
    if (existsTrackWithId(id)) {
        deleteTrackById(id);
        res.status(200).json({ message: "Track deleted" });
    }
};
