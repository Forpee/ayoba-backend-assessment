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
