import Media from './Media.js'

export class AudioFile extends Media {
    constructor(title, artist, duration, filePath, format, bitrate) {
        super(title, artist, duration, filePath);
        this.#format = format;
        this.#bitrate = bitrate;
        this.#volume = 50;
    }
    #format;
    #bitrate;
    #volume;

    getFormat() {
        return this.#format;
    }
    getBitrate() {
        return this.#bitrate;
    }
    getVolume() {
        return this.#volume;
    }
    play() {
        this.setCurrentPlaying(true);
        this.updatePlayStatics();
        return `Playing audio ${this.getTitle()} by ${this.getArtist()}`

    }

    pause() {
        this.setCurrentPlaying(false);
        return `Paused audio ${this.getTitle()} by ${this.getArtist()}`
    }
    stop() {
        this.setCurrentPlaying(false);
        this.currentPosition = 0;
    }
    getMediaInfo() {
        return {
            title: this.getTitle(),
            artist: this.getArtist(),
            type: 'Audio',
            duration: this.getDuration()
        }
    }

    setVolume(level) {
        this.#volume = Math.max(0, Math.min(100, level));
        return `Volume set to ${this.#volume}`;
    }
    getVolume() {
        return this.#volume;
    }

}

const music = new AudioFile('xyz', 'yzx', 30, 'd', 'mp3', 100)
console.log(music.play())

// const duration = 9037
// const hours = Math.floor(duration / 3600);
// const minutes = Math.floor((duration % 3600) / 60);
// const seconds = duration % 60;
// console.log(`${hours} : ${minutes} : ${seconds}`)

