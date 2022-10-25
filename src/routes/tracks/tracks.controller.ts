import { Response, Request } from "express";
import { addNewTrack } from "../../models/tracks.model";

export const httpGetAllTracks = () => {};

export const httpAddNewTrack = (req: Request, res: Response) => {
    const trackData = req.body;

    if (
        !trackData.name ||
        !trackData.album ||
        !trackData.artist ||
        !trackData.duration ||
        !trackData.artwork ||
        !trackData.audio
    ) {
        return res.status(400).json({
            error: "Missing required track property",
        });
    }

    const newTrack = addNewTrack(trackData);
    res.status(201).json(newTrack);
};

export const httpGetTrackById = () => {};
export const httpUpdateTrackById = () => {};
export const httpDeleteTrackById = () => {};
