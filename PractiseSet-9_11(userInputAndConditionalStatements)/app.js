// Task1
let city=prompt("1)Enter your city please");
if (city=="Karachi" || city=="karachi"){
    alert("Welcome to the city of lights");
}
else {
    alert("Invalid city entered");
}





// Task2
let gender=prompt("2)Enter your gender please");
if (gender  == "Male" || gender == "male"){
        alert(`Good morning, Sir`)
}

else if (gender  == "Female" || gender == "female"){
        alert(`Good morning, Ma'am`)
}
else{
    alert("Invalid gender entered")
}


//Task3
let signal=prompt("3)Enter the color of the traffic signal")
if(signal=="Red" ||signal=="red"){
    alert("You must stop")
}
else if(signal=="Green" ||signal=="green"){
    alert("Move now")
}
else if(signal=="Yellow" ||signal=="yellow"){
    alert("You are ready to move")
}

else{
    alert("Invalid signal entered")
}





// Task4

let fuel=prompt("4)Please enter the remaining fuel");
if(fuel<0.25)
{
    alert("Please refill the fuel in your car")

}
else{
    alert("You have enough fuel")
}






// TAsk5
//a.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
else{
    alert("given condition for variable a is false");
}


// b.
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else{
    alert("given condition for variable b is false");
}
// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
else if (c === 13){
alert("condition 2 is true");
}
else if (++c < 14){
alert("condition 3 is true");
}
else if(c === 14){
alert("condition 4 is true");
}

else{
    alert("None of the conditions are true");
}
// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
else{
    alert("The cost are not equal");
}
// e. 
if (true){
alert("True");
}
else if (false){
alert("False");
}
else{
    alert("Condition is not true");
}

//f
if("car" < "cat"){
alert("car is smaller than cat");
}
else{
    alert  ("Car is larger than cat");
}








// task6
let totalMarks = 300;

let obtained = +prompt("6)Enter the total marks you got out of 300");

let per = ((obtained / totalMarks) * 100);


document.write("<h1>Marksheet</h1>  <br> "+`Marks obtained = ${obtained} <br> Total marks = ${totalMarks} <br>`)
document.write("Percentage= " + per + "%" + "<br>")

if (per >= 90) {
    Grade = "A+"
    remarks = "Well done You nailed it"
}

else if (per >= 80) {
    Grade = "A1"
    remarks = "Well done"
}
else if (per >= 70) {
    Grade = "A"
    remarks = "Great try"
}

else if (per >= 60) {
    Grade = "B"
    remarks = "You need to work hard"
}

else if (per >= 50) {
    Grade = "C"
    remarks = "You must need to work hard"
}

else {
    Grade = "Fail"
    remarks = "Better luck next time"

}

document.write("Grade=" + Grade + "<br>");
document.write("Remarks=" + remarks + "<br>");



// Task7
let no = 7;
let EntNum = +prompt("7)Enter the guessing number:")
if (EntNum == 7) {
    alert("Bingo ! Correct answer.")
}
else if (EntNum == EntNum + 1 || EntNum == EntNum -1) {
    alert(`The number you have chosen is ${EntNum} which is close enough to the correct answer`)
}
else{
    alert("Sorry, the number you have entered is not correct")
}

// Task8
let num = +prompt("8)Enter the number to check divisiblity by 3:");
if (num % 3 == 0) {
    alert(`The number ${num} is divisible by 3.`)
}
else {
    alert("Number is not divisible by 3")
}

// Task9
let nu = +prompt("9)Enter the number to check even or odd:");
if (nu % 2 == 0) {
    alert(`The ${nu} is even`)
}
else {
    alert(`The ${nu} is odd`)
}


// Task10
let tem = +prompt("10)Enter the temperature please");
if (tem >= 40) {
    alert(`The Temperature ${tem}oC is too hot`)
}

else if (tem >= 30) {
    alert(`The Weather basedon temperature ${tem}oC is Normal today`)
}
else if (tem >= 20) {
    alert(`Today's Weather is cool`)
}

else if (tem >= 10) {
    alert(` OMG! Today's Weather is cool`)
}

else {
    alert("You entered wrong value")
}


// task11
let num1 = +prompt("11)Enter the number 1:")
let num2 = +prompt("11)Enter the number 2:")

let action = prompt("Enter the operation to perform:")

add = num1 + num2;
sub = num1 - num2;
mul = num1 * num2;
div = num1 / num2;
remainder = num1 % num2;


if (action == "+") {
    alert(`The addition of ${num1} and ${num2} is = ${add}`)
}

else if (action == "-") {
    alert(`The subtraction of ${num1} and ${num2} is = ${sub}`)
}

else if (action == "-") {
    alert(`The multiplication of ${num1} and ${num2} is = ${mul}`)
}

else if (action == "/") {
    alert(`The division of ${num1} and ${num2} is = ${div}`)
}

else if (action == "%") {
    alert(`The remainder of ${num1} and ${num2} is = ${remainder}`)
}

else {
    alert("you entered wrong operation")
}