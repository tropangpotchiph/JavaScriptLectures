let d;

//Get todays date and time
d = new Date();

//Set to a string
d = d.toString();

// Get a specific date
//Note: month (0 based), 0 is January
// year, month, day,hours, minutes, second
d = new Date(2021, 4, 10, 12, 30, 0);

//Pass in a string
d = new Date("2021-07-10T12:30:00");
d = new Date("07/10/2021 12:30:00");
d = new Date("2022-07-10");

//https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

//Get current timestamp
d = Date.now();

//Getting the timestamp of a specific date
d = new Date();
d = d.getTime();
d = d.valueOf();

//Create a date from timestamp
d = new Date(124767658762);

//convert from millisecons to seconds
d = Math.floor(Date.now() / 1000);
console.log(d);
