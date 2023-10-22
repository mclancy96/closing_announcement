import { TimeComponent, getDuration } from "./timeClass.js";
import { playSounds, getTimeFiles } from "./playAudio.js";
import {
  CLOSING_INPUT_ELEMENT_TAG,
  REOPEN_INPUT_ELEMENT_TAG,
  CLOSED,
  CLOSING,
  CLOSED_1,
  CLOSED_2,
  CLOSED_3,
  CLOSED_4,
  CLOSING_1,
  CLOSING_2,
  CLOSING_3,
  CLOSING_4,
  CLOSING_5,
  CLOSING_6,
  CLOSING_7,
  CLOSING_PREFIX,
  NUMBER_PREFIX,
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
  const timeNow = new Date(Date.now());
  const timeNowComponent = new TimeComponent(
    `${timeNow.toTimeString().slice(0, 5)}`
  );
  const duration = getDuration(timeNowComponent, closingTime);
  const soundFiles = [];

  // Attention Target guests: the time is now
  soundFiles.push(CLOSING_PREFIX + CLOSING_1);
  // Play current time
  let timeFiles = getTimeFiles(timeNowComponent);
  timeFiles.forEach((file) => {
    soundFiles.push(file);
  });
  // and your target store will be closing in
  soundFiles.push(CLOSING_PREFIX + CLOSING_2);
  // Play time left
  soundFiles.push(NUMBER_PREFIX + `${duration}.mp3`);
  // minutes at
  soundFiles.push(CLOSING_PREFIX + CLOSING_3);
  // play closingTime
  timeFiles = getTimeFiles(closingTime);
  timeFiles.forEach((file) => {
    soundFiles.push(file);
  });
  // Please make your final selections and bring them to a register at
  // this time.We will reopen tomorrow morning at
  soundFiles.push(CLOSING_PREFIX + CLOSING_4);
  // Play reopenTime
  timeFiles = getTimeFiles(reopenTime);
  timeFiles.forEach((file) => {
    soundFiles.push(file);
  });
  // for your shopping convenience. Again, it is now
  soundFiles.push(CLOSING_PREFIX + CLOSING_5);
  // Play current time
  timeFiles = getTimeFiles(timeNowComponent);
  timeFiles.forEach((file) => {
    soundFiles.push(file);
  });
  // and your target store will be closing in
  soundFiles.push(CLOSING_PREFIX + CLOSING_6);
  // Play time left
  soundFiles.push(NUMBER_PREFIX + `${duration}.mp3`);
  // minutes. Thank you and have a nice night!
  soundFiles.push(CLOSING_PREFIX + CLOSING_7);
  playSounds(soundFiles);
};

export const announceClosed = async () => {
  const [closingTime, reopenTime] = getTimeComponents();
  const timeNow = new Date(Date.now());
  const timeNowComponent = new TimeComponent(
    `${timeNow.toTimeString().slice(0, 5)}`
  );
  const soundFiles = [];
  // Attention Target guests: the time is now
  soundFiles.push(CLOSING_PREFIX + CLOSED_1);
  // Play current time
  let timeFiles = getTimeFiles(timeNowComponent);
  timeFiles.forEach((file) => {
    soundFiles.push(file);
  });
  // and your target store is now closed. If you have not done so
  // already, please make your final selections and bring them to
  // a register located at the front of the store. Target will
  // reopen tomorrow morning at
  soundFiles.push(CLOSING_PREFIX + CLOSED_2);
  // Play reopenTime
  timeFiles = getTimeFiles(reopenTime);
  timeFiles.forEach((file) => {
    soundFiles.push(file);
  });
  // for your shopping convenience. Again, it is now
  soundFiles.push(CLOSING_PREFIX + CLOSED_3);
  // Play current time
  timeFiles = getTimeFiles(timeNowComponent);
  timeFiles.forEach((file) => {
    soundFiles.push(file);
  });
  // and your target store is now closed. Thank you and have a
  // nice night!
  soundFiles.push(CLOSING_PREFIX + CLOSED_4);
  playSounds(soundFiles);
};

export const closingOrClosed = () => {
  const [closingTime, reopenTime] = getTimeComponents();
  const timeNow = new Date(Date.now());
  const currentHour = timeNow.getHours();
  const currentMinute = timeNow.getMinutes();
  if (
    currentHour >= closingTime.getRawHour &&
    currentMinute >= closingTime.getMinute
  ) {
    return CLOSED;
  }
  return CLOSING;
};
