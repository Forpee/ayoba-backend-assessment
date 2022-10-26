import { randomUUID } from "crypto";

const playlists = new Map<string, Playlist>();

export const existsPlaylistWithId = (id: string) => playlists.has(id);

export const getAllPlaylists = () => Array.from(playlists.values());

export const addNewPlaylist = ({
    name, creator,
}: Playlist): Playlist => {
    const newPlaylist:Playlist = {
        id: randomUUID(),
        name,
        creator,
        playtime: 0,
        trackList: [],
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
    }: Playlist,
): Playlist => {
    const playlistToUpdate = getPlaylistById(id);
    playlistToUpdate.name = name;
    playlistToUpdate.creator = creator;
    return playlistToUpdate;
};

export const addTracksToPlaylist = (
    addedTime: number,
    id: string,
    tracksToAdd: Track[],
): Playlist => {
    const playlist = getPlaylistById(id);
    playlist.trackList = [...playlist.trackList, ...tracksToAdd];
    playlist.playtime += addedTime;
    return playlist;
};

export const deletePlaylistById = (id: string) => {
    playlists.delete(id);
};
