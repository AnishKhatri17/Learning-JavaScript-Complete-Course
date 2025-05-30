// Date Objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted


const date = new Date();// this prints current time in my system

// creating custom date
// Date(year, month, day, hour, minute, second, ms)
const customDate = new Date(2024, 0, 1, 2, 3, 4);

// Passing string value in date object
const stringDate = new Date("2024-06-06T12:00:00Z");

// Passing epic date to date object
const epicDate = new Date(0);
const epicDates = new Date(1700000000000); //1.7 million milliseconds from epic date

console.log(date);
console.log(customDate);
console.log(stringDate);
console.log(epicDate);
console.log(epicDates);

// current date and time
const dates = new Date();

const year = dates.getFullYear();
const month = dates.getMonth();
const day = dates.getDate();
const hour = dates.getHours();
const minute = dates.getMinutes();
const seconds = dates.getSeconds();
const dayOfWeek = dates.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(seconds);
console.log(dayOfWeek); // 0 is Sunday

//Setting Dates as per need
const setDate = new Date();

setDate.setFullYear(2001);
setDate.setMonth(5);
setDate.setDate(6);
setDate.setMinutes(21);
setDate.setSeconds(55);

console.log(setDate);


// Cpmparing Two Dates
const date1 = new Date("2024-12-31");
const date2 = new Date("2025-01-01");

if(date2 > date1 ){
    console.log("\n\n!!! HAPPY NEW YEAR !!!");
}
else{
    console.log("\n\n!!! NEW YEAR EVE !!!");
}