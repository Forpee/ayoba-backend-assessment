import { randomUUID } from "crypto";

const playlists = new Map<string, Playlist>();

export const existsPlaylistWithId = (id: string) => playlists.has(id);

export const getAllPlaylists = () => Array.from(playlists.values());

export const addNewPlaylist = ({name, creator, playtime, trackList}: Playlist): Playlist => {
    const newPlaylist:Playlist = {
        id: randomUUID(),
        name,
        creator,
        playtime,
        trackList,
    };

    playlists.set(newPlaylist.id as string, newPlaylist);
    return newPlaylist;
};

export const getPlaylistById = (id: string): Playlist => playlists.get(id) as Playlist;

export const updatePlaylistById = (
    id: string,
    {
        name,
        creator,
        playtime,
        trackList,
    }: Playlist
): Playlist => {
    const updatedPlaylist:Playlist = {
        id,
        name,
        creator,
        playtime,
        trackList,
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
