// 1))

let num1 = +prompt("1) Enter your first number");
let num2 = +prompt("1) Enter your second number");

let sum = (Number(num1 + num2));

document.write("Task1) <br> The sum of ", num1, " and ", num2, " is = ", sum+ "<br>"+ "<br>")





// Task2


let add=num1+num2;
let difference = num1 - num2;
let product = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2;

document.write("Task2) <br> Difference: " + difference + "<br>");
document.write("Product: " + product + "<br>");
document.write("Division: " + division + "<br>");
document.write("Remainder: " + remainder + "<br>"+ "<br>");


// task3

let variable;


variable = 4;
document.write("Task3) <br> 3b) Value after variable declaration is: " + variable + "<br>");


variable = 5;


document.write("3d) Initial value: " + variable + "<br>");


variable++;


document.write("3f) Value after increment is: " + variable + "<br>");


variable += 7;


document.write("3h) Value after addition is: " + variable + "<br>");


variable--;

document.write("3j) Value after decrement is: " + variable + "<br>");

variable = variable % 3;
document.write("3L) The remainder is: " + variable + "<br>"+ "<br>");


// task4

let ticketPrice = +prompt("4)) Enter the ticket price");

let cost = ticketPrice * 5;

document.write("Task4) <br>  the cost of buying 5 tickets is :" + cost + " PKR"+ "<br>"+ "<br>")







// task5
let number = +prompt("5)) Enter the number to generate its table:");

document.write("Task5) <br>"+number + " * 1 = " + (number * 1) + "<br>");

document.write(number + " * 2 = " + (number * 2) + "<br>");

document.write(number + " * 3 = " + (number * 3) + "<br>");
document.write(number + " * 4 = " + (number * 4) + "<br>");

document.write(number + " * 5 = " + (number * 5) + "<br>");
document.write(number + " * 6 = " + (number * 6) + "<br>");

document.write(number + " * 7 = " + (number * 7) + "<br>");
document.write(number + " * 8 = " + (number * 8) + "<br>");

document.write(number + " * 9 = " + (number * 9) + "<br>");

document.write(number + " * 10 = " + (number * 10) + "<br>"+ "<br>");


// TAsk6
// Convert Celsius to Fahrenheit
let celsius = +prompt("6))Enter the temperature in Celsius:");
let fahrenheit = (celsius * 9/5) + 32;
document.write("Task6) <br>"+celsius + "°C is " + fahrenheit + "°F<br>");

// Convert Fahrenheit to Celsius
let fahrenheitInput = +prompt("6))Enter the temperature in Fahrenheit:");
let celsiusResult = (fahrenheitInput - 32) * 5/9;
document.write(fahrenheitInput + "°F is " + celsiusResult + "°C" + "<br>" + "<br>");



// Task7

let priceItem1 = +prompt("7) Enter the price of item 1:");
let priceItem2 = +prompt("7) Enter the price of item 2:");

let quantityItem1 = +prompt("7)Enter the ordered quantity of item 1:");
let quantityItem2 = +prompt("7)Enter the ordered quantity of item 2:");

let shippingCharges = 100; 


let totalCostItem1 = priceItem1 * quantityItem1;
let totalCostItem2 = priceItem2 * quantityItem2;
let totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;


document.write("Task7) <br> <h1>Shopping Cart Checkout</h1>");
document.write("Price of item 1: " + priceItem1 + " PKR<br>");
document.write("Quantity of item 1: " + quantityItem1 + "<br>");
document.write("Price of item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of item 2: " + quantityItem2 + "<br>");
document.write("Shipping charges: " + shippingCharges + " PKR<br><br>");

document.write("Total cost of your order: " + totalCost + " PKR<br> <br>");



// Task8)
let totalMarks = +prompt("8)Enter the total marks:");
let marksObtained = +prompt("8)Enter the marks obtained:");

// Compute percentage
let per = (marksObtained / totalMarks) * 100;


document.write("Task8) <br> <h1>Marks Sheet</h1>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");


document.write("Percentage: " +per + "% <br> <br>");


// Task9)

let usdToPkr = 104.80; 
let riyalToPkr = 28;    


let dollars = 10; 
let riyals = 25;   


let totalPkr = (dollars * usdToPkr) + (riyals * riyalToPkr);


document.write("Task8) <br> <h1>Currency in PKR</h1> <br ");
document.write("Total currency in Pakistani Rupees: " + totalPkr + " PKR"+"<br>" + "<br>");


// Task10

// Initialize a variable with some number
let n = +prompt(" 10) Enter a number:");


let result = ((n + 5) * 10) / 2;


document.write("Task10) <br>Initial Number: " + n + "<br>");
document.write("Result after performing arithmetic operations: " + result +"<br>" + "<br>" );


// Task11))

let currentYear = +prompt("11) Enter the current year:");
let birthYear = +prompt("11) Enter your birth year:");


let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.write("Task8) <br> <h1>Age Calculator</h1> <br ");
document.write("Task11) <br> They are either " + age1 + " or " + age2 + " years old. <br> <br>");


// Task12


let radius = +prompt("Enter the radius of the circle:");


let pi = 3.142;


let circumference = 2 * pi * radius;


let area = pi * radius * radius;


document.write("Task12) <br> <h1>The Geometrizer</h1>");
document.write("Radius of the circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br> <br>");





// Task13))
let favSnack = prompt("13) Enter your favorite ");
let currentAge = +prompt("13) Enter your current age:");


let maxAge = +prompt("13) Enter the age you expect to live until:");


let amountPerDay = +prompt("13) Enter the estimated amount of your snack per day:");
let yearsRemaining = maxAge - currentAge;
let totalSnacks = yearsRemaining * 365 * amountPerDay; 



document.write("Task13) <br> <h1>Lifetime Supply Calculator</h1>");
document.write("Favorite snack: " + favSnack + "<br>");
document.write("You will need " + totalSnacks + " " + favSnack + "s to last you until the ripe old age of " + maxAge + ".");
