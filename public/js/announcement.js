const PARTONE = "main_sound.wav"

const announce = () => {
    const closingTime = document.getElementById('closingTime');
    console.log("clsoing time:", closingTime.value)
    const reopenTime = document.getElementById('reopenTime');
    playSound(PARTONE);
    playTime(closingTime);

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

    //Load the sound file (using a source element for expandability)
    const partOne = document.createElement("source");
    partOne.src = '/sounds/' + fileName;
    soundFile.appendChild(partOne);

    soundFile.load();
    soundFile.volume = 0.000000;
    soundFile.play();

    //Plays the sound
    function play() {
        //Set the current time for the audio file to the beginning
        soundFile.currentTime = 0;
        soundFile.volume = 1;

        //Due to a bug in Firefox, the audio needs to be played after a delay
        setTimeout(function () { soundFile.play(); }, 1);
    }

    play()
}

const playTime = (time) => {
    // Get the time
    // Break it down into hour, minutes, and period (am/pm)
    // Play those files
}