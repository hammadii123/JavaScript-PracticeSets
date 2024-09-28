// Task1


let no = +prompt("1)Enter the value of a :")


document.write("<h3>Task1</h3> <br> The value of a is: " + no + "<br>");

++a;
document.write("The value of ++a is: " + no + "<br>");

a++;
document.write("The value of a++ is: " + no + "<br>");

-a;
document.write("The value of -a is: " + no + "<br>");

a--;
document.write("The value of a-- is: " + no + "<br> <br>");


// Task2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("<h3>Task2</h3> <br> a: " + a + "<br>");
document.write("b: " + b + "<br>");
document.write("result: " + result + "<br> <br>");

// Task3

var name = prompt("3) Please enter your name:");
document.write("<h3>Task3</h3> <br> Hello, " + name + " !<br> <br>");

// TAsk4. 5 by default
var number = parseInt(prompt("4)Enter a number to generate table"));
if (isNaN(number)) {
    number = 5;
}
document.write("<h3>Task4</h3> <br>")
for (var i = 1; i <= 10; i++) {
    
    document.write(+number + " x " + i + " = " + (number * i) + "<br> <br>");
}

// 5. 
var subject1Name = prompt("5)Enter the name of the first subject:");
var subject2Name = prompt("5)Enter the name of the second subject:");
var subject3Name = prompt("5)Enter the name of the third subject:");

var totalMarksPerSubject = 100;

var subject1Marks = parseInt(prompt("Enter marks obtained in " + subject1Name + ":"));
var subject2Marks = parseInt(prompt("Enter marks obtained in " + subject2Name + ":"));
var subject3Marks = parseInt(prompt("Enter marks obtained in " + subject3Name + ":"));

var totalMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (totalMarks / (totalMarksPerSubject * 3)) * 100;

document.write("<h3>Task5</h3> <br> Total Marks: " + totalMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");