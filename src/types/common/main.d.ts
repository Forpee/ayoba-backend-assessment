interface Track {
    id?: string;
    name: string;
    album: string;
    artist: string;
    releaseDate: Date | string;
    duration: number; // in seconds
    artwork: string; // url
    audio: string; // url
}

interface Playlist {
    id?: string;
    name: string;
    creator: string;
    description: string;
    playtime: number; // in seconds
    trackList: Track[];
}
