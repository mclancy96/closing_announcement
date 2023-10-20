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

}

/**
 * Finds the amount of time from the startTime to the endTime. Assumes
 * that the times are less than 24 hours apart.
 * @param {TimeComponent} startTime 
 * @param {TimeComponent} endTime 
 * @returns A number representing the duration.
 */
export const getDuration = (startTime, endTime) => {
    // converts the provide start and end times to a duration of hours (if applicable) and minutes. Mostly just to be used with a matter of minutes.
}

