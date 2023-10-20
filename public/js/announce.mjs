import { TimeComponent } from "./timeClass.js";
import { playSound, playTime } from "./playAudio.js";
import { announceClosing, announceClosed } from "./closingAnnouncement.js";
import {
    CLOSING,
    CLOSED,
    CLOSING_INPUT_ELEMENT_TAG,
    REOPEN_INPUT_ELEMENT_TAG,
    CLOSING_BUTTON_ID,
} from "./constants.js";


/**
 * Makes the desired announcement
 * @param {String} typeOfAnnouncement what kind of announcement to make.
 * typeOfAnnouncement can be closing, 
 */
const announce = async (typeOfAnnouncement) => {
    switch (typeOfAnnouncement) {
        case CLOSING:
            announceClosing()
            break;
        default:
            return "Not a valid announcement type";
    }


    // await playSound('mainclosed1.mp3');
    // await playTime(closingTime);

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
};

// adds the event listener to the announce button so it triggers the announcement.
document
    .getElementById(CLOSING_BUTTON_ID)
    .addEventListener("click", announce(CLOSING), false);
