export default class Media {
    constructor(title, artist, duration, filePath) {
        this.#title = title;
        this.#artist = artist;
        this.#duration = duration;
        this.#filePath = filePath;
        this.#playCount = 0;
        this.#lastPlayed = null;
        this.#isPlaying = false;
        this.currentPosition = 0;

    }
    #title;
    #artist;
    #duration;
    #filePath;
    #playCount;
    #lastPlayed;
    #isPlaying;

    getTitle() {
        return this.#title;
    }
    getArtist() {
        return this.#artist;
    }
    getDuration() {
        return this.#duration;
    }
    getPlayCount() {
        return this.#playCount;
    }
    getLastPlayed() {
        return this.#lastPlayed;
    }
    isCurrentPlaying() {
        return this.#isPlaying;
    }

    updatePlayStatics() {
        this.#playCount++;
        this.#lastPlayed = Date.now();
    }
    play() {
        throw new Error('play() must be implemented by subclass');
    }
    pause() {
        throw new Error('pause() must be implemented by subclass');
    }
    stop() {
        throw new Error('stop() must be implemented by subclass');

    }
    getMediaInfo() {
        throw new Error('getMediaInfo() must be implemented by subclass');

    }
    getFormattedDuration() {
        const minutes = Math.floor(this.#duration / 60);
        const seconds = this.#duration % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    getProgress() {
        if (this.#duration === 0) return 0;
        return (this.currentPosition / this.#duration) * 100;
    }

    setCurrentPlaying(bool){
        this.#isPlaying = bool;
    }
}
