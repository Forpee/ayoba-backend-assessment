import express from "express";
import {
    httpAddNewTrack,
    httpDeleteTrackById,
    httpGetAllTracks,
    httpGetTrackById,
    httpUpdateTrackById,
} from "./tracks.controller";

const tracksRouter = express.Router();

tracksRouter.get("/", httpGetAllTracks);
tracksRouter.post("/", httpAddNewTrack);
tracksRouter.get("/:id", httpGetTrackById);
tracksRouter.patch("/:id", httpUpdateTrackById);
tracksRouter.delete("/:id", httpDeleteTrackById);

export default tracksRouter;
