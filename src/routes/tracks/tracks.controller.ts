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
    return res.status(200).json(getAllTracks());
};

export const httpAddNewTrack = (req: Request, res: Response) => {
    const trackData = req.body;

    if (!isTrack(trackData)) {
        return res.status(400).json({
            error: "Missing required track property",
        });
    }

    return res.status(201).json(addNewTrack(trackData));
};

export const httpGetTrackById = (req: Request, res: Response) => {
    const { id } = req.params;

    if (existsTrackWithId(id)) {
        return res.status(404).json({
            error: "Track not found",
        });
    }

    return res.status(200).json(getTrackById(id));
};

export const httpUpdateTrackById = (req: Request, res: Response) => {
    const { id } = req.params;
    const trackData = req.body;

    if (!isTrack(trackData)) {
        return res
            .status(400)
            .json({ error: "Missing required track property" });
    }

    if (!existsTrackWithId(id)) {
        return res.status(404).json({ error: "Track not found" });
    }
    return res.status(200).json(updateTrackById(id, trackData));
};

export const httpDeleteTrackById = (req: Request, res: Response) => {
    const { id } = req.params;

    if (!existsTrackWithId(id)) {
        return res.status(404).json({ error: "Track not found" });
    }

    deleteTrackById(id);
    return res.status(200).json({ message: "Track deleted" });
};
