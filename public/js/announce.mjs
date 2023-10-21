import {
  announceClosing,
  announceClosed,
  closingOrClosed,
} from "./closingAnnouncement.js";
import { CLOSING, CLOSED, CLOSING_BUTTON_ID } from "./constants.js";

/**
 * Makes the desired announcement. Controls the flow of announcements
 */
const announce = async () => {
  // Determine whether the store is closed or closing
  let typeOfAnnouncement = closingOrClosed();
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
document.getElementById(CLOSING_BUTTON_ID).addEventListener("click", announce);
