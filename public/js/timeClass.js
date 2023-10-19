export class TimeComponent {
    constructor(hour, minute, period) {
        this.hour = hour;
        this.minute = minute;
        this.period = period;
    }
}

export const createTimeComponent = (time) => {
    const rawHour = time.slice(0, 2);
    const hour = parseInt(rawHour) > 12 ? `${parseInt(rawHour) - 12}` : rawHour;
    const minute = time.slice(3, 5);
    const period = parseInt(rawHour) > 11 ? "PM" : "AM";
    return new TimeComponent(hour, minute, period)
}

