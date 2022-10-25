import { randomUUID } from "crypto";

const tracks = new Map<string, Track>();

export const addNewTrack = (trackData: Track): Track => {
    const newTrack = {
        id: randomUUID(),
        ...trackData,
    };

    tracks.set(newTrack.id, newTrack);
    return newTrack;
};
