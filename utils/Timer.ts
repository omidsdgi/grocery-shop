export const timerHelper=(end:string) => {
    const endDate = new Date(end).getTime();
    const currentDate = new Date().getTime();

    const timeRemaining = endDate - currentDate;

    const timeObject = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (timeRemaining > 0) {
        timeObject.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        timeObject.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        timeObject.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        timeObject.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    }
    return timeObject;
}