export const isTrack = (track: any): track is Track => (
    track.name
        && track.album
        && track.artist
        && track.duration
        && track.artwork
        && track.audio
);

export const isPlaylist = (playlist: any): playlist is Playlist => (
    playlist.name
        && playlist.creator
        && playlist.description
);
