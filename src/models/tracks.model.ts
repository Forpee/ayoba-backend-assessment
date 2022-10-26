import { randomUUID } from "crypto";

const tracks = new Map<string, Track>();

export const existsTrackWithId = (id: string) => {
    return tracks.has(id);
};

export const getAllTracks = () => {
    return Array.from(tracks.values());
};

export const addNewTrack = (trackData: Track): Track => {
    const newTrack = {
        id: randomUUID(),
        ...trackData,
    };

    tracks.set(newTrack.id, newTrack);
    return newTrack;
};

export const getTrackById = (id: string): Track => {
    return tracks.get(id) as Track;
};

export const updateTrackById = (id: string, trackData: Track): Track => {
    const updatedTrack = {
        id,
        ...trackData,
    };

    tracks.set(id, updatedTrack);
    return updatedTrack;
};

export const deleteTrackById = (id: string) => {
    tracks.delete(id);
};
