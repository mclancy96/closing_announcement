const { TimeComponent, createTimeComponent } = require("./timeClass");
const PARTONE = "main_sound.wav"
const CLOSINGTIME = "ninepm.wav"

const announce = async () => {
    const closingTime = document.getElementById('closingTime').value;
    const reopenTime = document.getElementById('reopenTime');

    await playSound(PARTONE);
    await playTime(closingTime);

    // Attention Target guests: the time is now
    // Play current time
    // and your target store will be closing in
    // Play time left
    // minutes at
    // play closingTime
    // Please make your final selections and bring them to a register at this time. We will reopen tomorrow morning at
    // Play reopenTime
    // for your shopping convenience. Again, it is now 
    // Play current time
    // and your target store will be closing in
    // Play time left
    // minutes. Thank you and have a nice night!
}

const playSound = (fileName) => {
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

const playTime = (time) => {
    // Break the time down into hour, minutes, and period (am/pm)
    const timeObj = createTimeComponent(time)
    // Play those files
}
const getDuration = (startTime, endTime) => {
    // converts the provide start and end times to a duration of hours (if applicable) and minutes. Mostly just to be used with a matter of minutes.
}