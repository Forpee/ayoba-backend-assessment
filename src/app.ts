import express from "express";
import playlistsRouter from "./routes/playlists/playlists.router";
import tracksRouter from "./routes/tracks/tracks.router";

const app = express();

app.use(express.json());
app.use("/playlists", playlistsRouter);
app.use("/tracks", tracksRouter);

export default app;
