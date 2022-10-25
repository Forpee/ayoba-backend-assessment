import express from "express";
import {
    httpAddNewTrack,
    httpGetAllTracks,
    httpGetTrackById,
    httpUpdateTrackById,
} from "./tracks.controller";

const tracksRouter = express.Router();

tracksRouter.get("/", httpGetAllTracks);
tracksRouter.post("/", httpAddNewTrack);
tracksRouter.get("/:id", httpGetTrackById);
tracksRouter.put("/:id", httpUpdateTrackById);

export default tracksRouter;
