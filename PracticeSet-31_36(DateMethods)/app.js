//Task 1: Write a program that displays current date and time in your browser.

let date = new Date();
document.write(`<h3>Task1:</h3>${date}`);

// 2. Write a program that alerts the current month in words. For example December.
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let getMonth = new Date().getMonth();

document.write(`<h3>Task2:</h3>current month = ${months[getMonth]}`);

//Task3: Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = new Date().getDay();
document.write(`<h3>Task3:</h3> Today is ${days[day]}`);

// Task4:Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
let days1 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day1 = new Date().getDay();

if (days1[day1] === "Saturday" || days1[day1] === "Sunday") {
  document.write(`<h3>Task4:</h3>It's Fun day!`);
}

// Task5 : Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
let month1 = new Date().getDate();
document.write(`<h3>Task5:</h3>`);
if (month1 < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write(" Last days of the month");
}

// Task6 : Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

let currentDateee = new Date();

let millisecondsSinceEpoch = currentDateee.getTime();

// Convert milliseconds to minutes

minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / 60000); // 1 minute = 60 seconds = 60,000 milliseconds

document.write(
  `<h3>Task6:</h3>Minutes since midnight, Jan. 1, 1970: ${minutesSinceEpoch}`
);

//Task7: Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
let whether = new Date().getHours();
document.write(`<h3>Task7:</h3>`);
if (whether < 12) {
  document.write(`Its AM`);
} else {
  document.write(`Its PM`);
}

// Task8 :  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate

const today = new Date();

const laterDate = new Date(2020, 11, 31);

const differenceInMilliseconds = today - laterDate;

// Convert milliseconds to days
const differenceInDays = Math.floor(
  differenceInMilliseconds / (1000 * 60 * 60 * 24)
);

document.write(`<h3>Task8:</h3>Today's date: ${today}`);
document.write(`Later date: ${laterDate}`);
document.write(`Difference in days: ${differenceInDays}`);

// Task9 :. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

let pastRamzan = new Date(2015, 5, 18);

let todayDate = new Date();

let differenceInDays1 = Math.floor(
  (todayDate - pastRamzan) / (1000 * 60 * 60 * 24)
);

document.write(
  `<h3>Task9:</h3>Number of days past since 1st Ramadan: ${differenceInDays1}`
);

// Task10:Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// Reference date
const referenceDate = new Date(2015, 5, 18);

const startDate = new Date(2015, 0, 1);

const differenceInMilliseconds1 = referenceDate - startDate;

//  milliseconds to seconds
const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
document.write(
  `<h3>Task10:</h3>Seconds elapsed between January 1, 2015, and June 18, 2015: ${differenceInSeconds} seconds`
);

// Task11 :Create a Date object for the current date and time.1 :Extract the hours, reset the date object an hour ahead and1 :finally display the date object in your browser
const currentDate = new Date();

const oneHourAgo = new Date(currentDate);
oneHourAgo.setHours(currentDate.getHours() - 1);

document.write(
  `<h3>Task11:</h3>Current date: ${currentDate.toString()}\n` +
    `1 hour ago, it was: ${oneHourAgo.toString()}`
);

// Task12: Write a program that creates a date object and show the date in an alert box that is reset to 100 years back.

let currentDate1 = new Date();

let pastDate = new Date(currentDate1);

pastDate.setFullYear(currentDate1.getFullYear() - 100);

document.write(`<h3>Task12:</h3>Current date: ${currentDate1.toString()}`);
document.write(`100 years back it was: ${pastDate.toString()}`);

// Task13:Write a program to ask the user about his age. Calculate and show his birth year in your browser.
let age = 20;
let birthYear = new Date().getFullYear() - age;

document.write(
  `<h3>Task13:</h3>Your age is: ${age} \n Birth year: ${birthYear}`
);

// TAsk14: Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
const customerName = "Hammad Mustafa";
const currentMonth = "November";
const numberOfUnits = 350;
const chargesPerUnit = 10;
const latePaymentSurcharge = 50;

const netAmount = numberOfUnits * chargesPerUnit;
const grossAmount = netAmount + latePaymentSurcharge;

const roundedNetAmount = netAmount.toFixed(2);
const roundedGrossAmount = grossAmount.toFixed(2);

document.write(`<h3>Task14:</h3>
        <h4>Customer Name: ${customerName}</h4>
        <h4>Current Month: ${currentMonth}</h4>
        <p>Number of Units: ${numberOfUnits}</p>
        <p>Charges per Unit: ${chargesPerUnit.toFixed(2)}</p>
        <p>Net Amount Payable (within Due Date): ${roundedNetAmount}</p>
        <p>Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}</p>
        <p>Gross Amount Payable (after Due Date): ${roundedGrossAmount}</p>
    `);
