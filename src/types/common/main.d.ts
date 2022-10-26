interface Track {
    id?: string;
    name: string;
    album: string;
    artist: string;
    duration: number; // in seconds
    artwork: string;
    audio: string;
}

interface Playlist {
    id?: string;
    name: string;
    creator: string;
    playtime: number; // in seconds
    trackList: Track[];
}
