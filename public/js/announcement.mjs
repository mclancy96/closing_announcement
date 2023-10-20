import { TimeComponent } from "./timeClass.js";
import { playSound, playTime } from "./playAudio.js";

const PARTONE = "main_sound.wav"
const CLOSINGTIME = "ninepm.wav"

const announce = async () => {
    const closingTime = new TimeComponent(document.getElementById('closingTime').value);
    const reopenTimeRaw = new TimeComponent(document.getElementById('reopenTime'));

    await playSound('mainclosed1.mp3');
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

document.getElementById("announceButton").addEventListener("click", announce, false);
