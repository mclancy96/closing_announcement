import { TimeComponent } from "./timeClass.js";

/**
 * playSound is used to play whatever file name you pass into it. The
 * file should be in the sounds directory of the public directory.
 * @param {string} fileName 
 * @returns A play promise, which will resolve once the file finishes playing.
 * It will reject if there is an error with the file.
 */
export const playSound = (fileName) => {
    const soundFile = document.createElement("audio");
    soundFile.preload = "auto";
    const source = document.createElement("source");
    source.src = '/sounds/' + fileName;
    soundFile.appendChild(source);
    soundFile.load();
    //Plays the sound
    const playPromise = new Promise((resolve, reject) => {
        function play() {
            //Set the current time for the audio file to the beginning
            soundFile.currentTime = 0;
            soundFile.volume = 1;

            //Due to a bug in Firefox, the audio needs to be played after a delay
            setTimeout(function () { soundFile.play(); }, 1);
        }
        play()
        soundFile.addEventListener('ended', () => { resolve('Audio complete') })
        soundFile.addEventListener('error', () => { reject('Audio error') })
    })
    return playPromise;
}

/**
 * This takes a TimeComponent type argument and selects the appropriate
 * files to play for that time.
 * @param {TimeComponent} time 
 */
export const playTime = (time) => {
    // Play those files
}