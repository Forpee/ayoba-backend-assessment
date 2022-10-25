interface Track {
    id?: string;
    name: string;
    album: string;
    artist: string;
    duration: number;
    artwork: string;
    audio: string;
}

interface Playlist {
    id?: string;
    name: string;
    creator: string;
    playTime: number;
    trackList: Track[];
}
