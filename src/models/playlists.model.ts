import { randomUUID } from "crypto";

const playlists = new Map<string, Playlist>();

export const existsPlaylistWithId = (id: string) => {
    return playlists.has(id);
};

export const getAllPlaylists = () => {
    return Array.from(playlists.values());
};

export const addNewPlaylist = (playlistData: Playlist): Playlist => {
    const newPlaylist = {
        id: randomUUID(),
        ...playlistData,
    };

    playlists.set(newPlaylist.id, newPlaylist);
    return newPlaylist;
};

export const getPlaylistById = (id: string): Playlist => {
    return playlists.get(id) as Playlist;
};

export const updatePlaylistById = (
    id: string,
    playlistData: Playlist
): Playlist => {
    const updatedPlaylist = {
        id,
        ...playlistData,
    };

    playlists.set(id, updatedPlaylist);
    return updatedPlaylist;
};

export const deletePlaylistById = (id: string) => {
    playlists.delete(id);
};
