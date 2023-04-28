let x;
let d = new Date();
// let d = new Date("1990/4/29");

// Date Methods

// String representation of a date
x = d.toString();

//give the time stamp of date in milliseconds
x = d.getTime();
x = d.valueOf();

//getting parts of the year
x = d.getFullYear();
x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

//Intl Date Time Format API (locale specific)
x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("en-GB").format(d);
x = Intl.DateTimeFormat("default").format(d);

//long format
x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

//short format
x = d.toLocaleString("default", { month: "short" });

x = d.toLocaleString("default", {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
});

console.log(x);
