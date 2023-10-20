import {
  announceClosing,
  announceClosed,
  closingOrClosed,
} from "./closingAnnouncement.js";
import { CLOSING, CLOSED, CLOSING_BUTTON_ID } from "./constants.js";

/**
 * Makes the desired announcement. Controls the flow of announcements
 * @param {String} typeOfAnnouncement what kind of announcement to make.
 * typeOfAnnouncement can be closing,
 */
const announce = async (typeOfAnnouncement) => {
  if (typeOfAnnouncement == CLOSING) {
    typeOfAnnouncement = closingOrClosed();
  }
  switch (typeOfAnnouncement) {
    case CLOSING:
      announceClosing();
      break;
    case CLOSED:
      announceClosed();
      break;
    default:
      return "Not a valid announcement type";
  }
};

// adds the event listener to the announce button so it triggers the announcement.
document
  .getElementById(CLOSING_BUTTON_ID)
  .addEventListener("click", announce(CLOSING), false);
