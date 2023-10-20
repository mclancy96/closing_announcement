import { TimeComponent } from "./timeClass.js";
import { playSound, playTime } from "./playAudio.js";
import {
  CLOSING_INPUT_ELEMENT_TAG,
  REOPEN_INPUT_ELEMENT_TAG,
  CLOSED,
  CLOSING,
} from "./constants.js";

const getTimeComponents = () => {
  const closingTime = new TimeComponent(
    document.getElementById(CLOSING_INPUT_ELEMENT_TAG).value
  );
  const reopenTime = new TimeComponent(
    document.getElementById(REOPEN_INPUT_ELEMENT_TAG).value
  );
  return [closingTime, reopenTime];
};

export const announceClosing = () => {
  const [closingTime, reopenTime] = getTimeComponents();
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

export const announceClosed = () => {
  const [closingTime, reopenTime] = getTimeComponents();
  // Attention Target guests: the time is now
  // Play current time
  // and your target store is now closed. If you have not done so
  // already, please make your final selections and bring them to
  // a register located at the front of the store. Target will
  // reopen tomorrow morning at
  // Play reopenTime
  // for your shopping convenience. Again, it is now
  // Play current time
  // and your target store is now closed. Thank you and have a
  // nice night!
};

export const closingOrClosed = () => {
  const [closingTime, reopenTime] = getTimeComponents();
  const timeNow = new Date(Date.now());
  const currentHour = timeNow.getHours();
  console.log(currentHour, " current hour", closingTime.getRawHour, "raw");
  return currentHour >= closingTime.getRawHour ? CLOSED : CLOSING;
};
