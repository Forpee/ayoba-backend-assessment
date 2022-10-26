import { randomUUID } from "crypto";

const tracks = new Map<string, Track>();

export const existsTrackWithId = (id: string) => tracks.has(id);

export const getAllTracks = () => Array.from(tracks.values());

export const addNewTrack = ({
    name,
    album,
    artist,
    releaseDate,
    duration,
    artwork,
    audio,
}: Track): Track => {
    const newTrack: Track = {
        id: randomUUID(),
        name,
        album,
        artist,
        releaseDate,
        duration,
        artwork,
        audio,
    };

    tracks.set(newTrack.id as string, newTrack);
    return newTrack;
};

export const getTrackById = (id: string): Track => tracks.get(id) as Track;

export const updateTrackById = (id: string, {
    name,
    album,
    artist,
    releaseDate,
    duration,
    artwork,
    audio,
}: Track): Track => {
    const updatedTrack: Track = {
        name,
        album,
        artist,
        releaseDate,
        duration,
        artwork,
        audio,
        id,
    };

    tracks.set(id, updatedTrack);
    return updatedTrack;
};

export const deleteTrackById = (id: string) => {
    tracks.delete(id);
};
