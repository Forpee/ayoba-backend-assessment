import express from "express";
import playlistsRouter from "./routes/playlists/playlists.router";

const app = express();

app.use(express.json());
app.use("/playlists", playlistsRouter);

export default app;
