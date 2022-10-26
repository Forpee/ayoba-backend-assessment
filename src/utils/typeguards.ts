export const isTrack = (track: any): track is Track => {
    return (
        track.name &&
        track.album &&
        track.artist &&
        track.duration &&
        track.artwork &&
        track.audio
    );
};

export const isPlaylist = (playlist: any): playlist is Playlist => {
    return (
        playlist.name &&
        playlist.creator &&
        playlist.playTime &&
        playlist.trackList
    );
};
