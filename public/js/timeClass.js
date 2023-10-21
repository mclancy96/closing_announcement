/**
 * Represents a time with each segment parsed into separate data members
 * to allow for individualized selections when making an announcement.
 */
export class TimeComponent {
  constructor(time) {
    const rawHour = time.toString().slice(0, 2);
    this.hour = parseInt(rawHour) > 12 ? `${parseInt(rawHour) - 12}` : rawHour;
    this.minute = time.toString().slice(3, 5);
    this.period = parseInt(rawHour) > 11 ? "PM" : "AM";
    this.rawHour = rawHour;
  }
  get getHour() {
    return this.hour;
  }
  get getMinute() {
    return this.minute;
  }
  get getPeriod() {
    return this.period;
  }
  get getRawHour() {
    return this.rawHour;
  }
  set setHour(newHour) {
    this.hour = newHour;
  }
  set setRawHour(newRawHour) {
    this.rawHour = newRawHour;
  }
  set setMinute(newMinute) {
    this.minute = newMinute;
  }
  set setPeriod(newPeriod) {
    this.period = newPeriod;
  }
  /**
   * Used to add 24 hours to make the resulting value not negative.
   */
  add24Hours() {
    this.rawHour += +24;
  }
  /**
   * Used to add 60 minutes to make the resulting value not negative.
   */
  add60Minutes() {
    this.minute += 60;
    this.rawHour -= 1;
  }
}

/**
 * Finds the amount of time from the startTime to the endTime. Assumes
 * that the times are less than 24 hours apart, but ideally should be
 * less than one hour because there is no audio file for "hours" as we
 * wouldn't make a closing announcement more than an hour out.
 * @param {TimeComponent} startTime
 * @param {TimeComponent} endTime
 * @returns A number representing the duration in minutes.
 */
export const getDuration = (startTime, endTime) => {
  // make copies of the start and end time to not alter them
  const testStartTime = new TimeComponent(
    `${startTime.getRawHour}:${startTime.getMinute}`
  );
  const testEndTime = new TimeComponent(
    `${endTime.getRawHour}:${endTime.getMinute}`
  );
  // here we're testing whether the endTime is in the next day, i.e., 12am
  if (testStartTime.getRawHour > testEndTime.getRawHour) {
    testEndTime.add24Hours();
  }
  // here we want to know if the start time's minutes are more than the end time's minutes.
  if (testStartTime.getMinute > testEndTime.getMinute) {
    testEndTime.add60Minutes();
  }

  let duration = 0;
  duration += testEndTime.getMinute - testStartTime.getMinute;
  duration += (testEndTime.getRawHour - testStartTime.getRawHour) * 60;

  return duration;
};
