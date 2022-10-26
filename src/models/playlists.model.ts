import { randomUUID } from "crypto";

const playlists = new Map<string, Playlist>();

export const existsPlaylistWithId = (id: string) => playlists.has(id);

export const getAllPlaylists = () => Array.from(playlists.values());

export const addNewPlaylist = (playlistData: Playlist): Playlist => {
    const newPlaylist = {
        id: randomUUID(),
        ...playlistData,
    };

    playlists.set(newPlaylist.id, newPlaylist);
    return newPlaylist;
};

export const getPlaylistById = (id: string): Playlist => playlists.get(id) as Playlist;

export const updatePlaylistById = (
    id: string,
    playlistData: Playlist,
): Playlist => {
    const updatedPlaylist = {
        id,
        ...playlistData,
    };

    playlists.set(id, updatedPlaylist);
    return updatedPlaylist;
};

export const addTracksToPlaylist = (
    id: string,
    tracksToAdd: Track[],
): Playlist => {
    const playlist = getPlaylistById(id);
    playlist.trackList = [...playlist.trackList, ...tracksToAdd];
    return playlist;
};

export const deletePlaylistById = (id: string) => {
    playlists.delete(id);
};
