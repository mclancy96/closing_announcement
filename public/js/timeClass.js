export class TimeComponent {
    constructor(time) {
        const rawHour = time.toString().slice(0, 2);
        this.hour = parseInt(rawHour) > 12 ? `${parseInt(rawHour) - 12}` : rawHour;
        this.minute = time.toString().slice(3, 5);
        this.period = parseInt(rawHour) > 11 ? "PM" : "AM";
    }

}

export const getDuration = (startTime, endTime) => {
    // converts the provide start and end times to a duration of hours (if applicable) and minutes. Mostly just to be used with a matter of minutes.
}