import { TimeComponent } from "./timeClass.js";

/**
 * playSounds is used to play a list of file names you passed into it. The
 * file should be in the sounds directory of the public directory. This will
 * preload all of the files first so that it can play without delay.
 * @param {list[string]} fileNames
 * @returns void
 */
export const playSounds = async (fileNames) => {
  const soundFiles = [];
  fileNames.forEach((file) => {
    if (fileExists("/sounds/" + file)) {
      const soundFile = document.createElement("audio");
      soundFile.preload = "auto";
      const source = document.createElement("source");
      source.src = "/sounds/" + file;
      soundFile.appendChild(source);
      soundFile.load();
      soundFiles.push(soundFile);
    }
  });

  // Play all of the preloaded sounds
  // If there's an error, log it and continue.
  for (const file of soundFiles) {
    try {
      await playSound(file);
    } catch (error) {
      console.log("There's an error", error);
      continue;
    }
  }
};

/**
 * Checks to see if the file exists to prevent issues playing it later.
 * @param {string} fileName
 * @returns boolean
 */
const fileExists = (fileName) => {
  var http = new XMLHttpRequest();
  http.open("HEAD", fileName, false);
  http.send();
  return http.status != 404;
};

/**
 * Plays that sound that is passed into it. It does this as promise, so that
 * the app can monitor its progress and continue when complete.
 * @param {HTMLAudioElement} soundFile
 * @returns A play promise, which will resolve once the file finishes playing.
 * It will reject if there is an error with the file.
 */
const playSound = (soundFile) => {
  //Plays the sound
  const playPromise = new Promise((resolve, reject) => {
    function play() {
      //Set the current time for the audio file to the beginning
      soundFile.currentTime = 0;
      soundFile.volume = 1;

      //Due to a bug in Firefox, the audio needs to be played after a delay
      setTimeout(function () {
        soundFile.play();
      }, 1);
    }
    play();
    soundFile.addEventListener("ended", () => {
      resolve("Audio complete");
    });
    soundFile.addEventListener("error", () => {
      reject("Audio error");
    });
  });
  return playPromise;
};

/**
 * This takes a TimeComponent type argument and selects the appropriate
 * files to play for that time.
 * @param {TimeComponent} time
 * @returns a list of file names to play
 */
export const getTimeFiles = (time) => {
  const fileNames = [];
  // Get those files
  let hourFile = "";
  if (time.getHour == 0) {
    hourFile = `numbers/12.mp3`;
  } else if (time.getHour < 10) {
    hourFile = `numbers/${parseInt(time.getHour)}.mp3`;
  } else {
    hourFile = `numbers/${time.getHour}.mp3`;
  }
  let minuteFile = "";
  if (time.getMinute >= 1) {
    minuteFile = `numbers/${time.getMinute}.mp3`;
  }
  const periodFile = `numbers/${time.getPeriod}.mp3`;
  fileNames.push(hourFile);
  if (minuteFile != "") {
    fileNames.push(minuteFile);
  }
  fileNames.push(periodFile);
  return fileNames;
};
