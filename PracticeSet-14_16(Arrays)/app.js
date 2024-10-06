// Task1))
// Declare an empty array using JS literal notation to storestudent names in future.

// 1))

let studentNamesLiterals=[];

// 2))
let studentNamesObject = new Array();

// 3))
let stringArray=["Hammad","Ali","Hamza","laraib"]

// 4))

let booleanArray=[true,false,false,true]

// 5))
let mixedArray=["Hammad",1,false,89,"Ali"]

// 6))
let qualifications=[ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

document.write(`
    <h1>Qualifications</h1> <br>
    1)) ${qualifications[0]} <br> 
    2)) ${qualifications[1]} <br> 
    3)) ${qualifications[2]} <br> 
    4)) ${qualifications[3]} <br> 
    5)) ${qualifications[4]} <br> 
    6)) ${qualifications[5]} <br> 
    7)) ${qualifications[6]} <br> 
    8)) ${qualifications[7]} <br> 
    9)) ${qualifications[8]} <br> 
    
    
    ` )



// Task2
// Write a program to store 3 student names in an array.Takeanother array to store score of these three students.  Assume that total marks are 500 for each student, display  the scores & percentages of students like:
let stud1=prompt("2))Enter the name of the student1:");
let stud2=prompt("2))Enter the name of the student2:");
let stud3=prompt("2))Enter the name of the student3:");

let studentsName=[stud1,stud2,stud3];

let score1=+prompt( `Enter the marks of ${studentsName[0]} out of 500 :`);

let score2=+prompt( `Enter the marks of ${studentsName[1]} out of 500 :`);

let score3=+prompt( `Enter the marks of ${studentsName[2]} out of 500 :`);

let scores=[score1,score2,score3];


let totalMarks=500;

let per1= ((score1/totalMarks)*100);

let per2= ((score2/totalMarks)*100);

let per3= ((score3/totalMarks)*100);

let percentages=[per1, per2, per3];

document.write(`<h1>Task2: <br> Marksheet</h1> <br> 
    
    Score of ${studentsName[0]} is ${scores[0]} . and the percentage is : ${percentages[0]} %  <br>
    Score of ${studentsName[1]} is ${scores[1]} . and the percentage is : ${percentages[1]} % <br>
    Score of ${studentsName[2]} is ${scores[2]} . and the percentage is : ${percentages[2]} % <br>

    
    `)



//     Task3
//     Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let colors=["Red","Blue","Green","Yellow","Black"];

document.write(`<h1>Task3: <br> Colors Array</h1> <br> ${colors} <br> <br>`)
// a))

let newColor=prompt("Enter a new color to add at the beginning:");
colors.unshift(`${newColor}`)

document.write(`<h2>After adding color at the beginning: </h2> ${colors} <br> <br>`)

// b))

let newColor2=prompt("Enter a new color you want to add at the end:")

colors.push(`${newColor2}`)

document.write(`<h2>After adding color at the end: </h2> ${colors} <br> <br>`)

// c))

let addedColor=prompt("Enter how many colors you want to add in the begining");
for(i=0; i<addedColor ;i++){
    let addColor=prompt(`Enter the color ${i+1} you want to add :`)
    colors.unshift(`${addColor}`)
   

}
document.write(`<h2>After adding ${addedColor} colors at the beginning: </h2> ${colors} <br> <br>`)

// d))
colors.shift();

document.write(`<h2>After deleting the first color: </h2> ${colors} <br> <br>`)

// e))
colors.pop();

document.write(`<h2>After deleting the last color: </h2> ${colors} <br> <br>`)

// f))
let ind=+prompt("At what Index do you want to add color?")

let colorName=prompt(`Enter the color name you want to add at the index ${ind}`)

colors.splice(ind, 0, colorName);
document.write(`<h2>After adding color ${colorName} at index ${ind} , the array becomes:</h2> <br> ${colors} <br>`)




// Task4))
// Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

let arr = [];
let numOfScores = +prompt("Enter how many scores you wanna add");

for (let i = 0; i < numOfScores; i++) {
    let score = +prompt("Enter the score"); 
    arr.push(score);
}


document.write(`<h3>Task4</h3>The ${numOfScores} scores you have entered are: ${arr.join(', ')} <br>`);


arr.sort(); 
document.write(`The sorted array is: ${arr.join(', ')} <br>`);




// Task5
// Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.


let cities = ["Karachi", "London", "Paris", "Tokyo", "Sydney"];


let selectedCities = cities.slice(0, 3); 


document.write("<h3>Task5</h3>Cities: " + cities.join(", ") + "<br>");
document.write("Selected Cities: " + selectedCities.join(", ") + "<br>");


// Task6
var arr1 = ["This ", " is ", " my ", " cat"]; 


var singleString = arr1.join("");


document.write("<h3>Task6</h3>The combined string is: " + singleString);



// TAsk7
// . Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

let fifoArray = []; 


fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor"); 


document.write("<h3>Task7 <br> Devices : </h3> " + fifoArray.join(", ") + "<br>");


let firstValue = fifoArray.shift(); 
document.write("Eleminated: " + firstValue + "<br>");
document.write("After eleminating 1st element: " + fifoArray.join(", ") + "<br>");

firstValue = fifoArray.shift(); 
document.write("Elemenated: " + firstValue + "<br>");
document.write("After eleminating 2nd element: " + fifoArray.join(", ") + "<br>");

firstValue = fifoArray.shift(); 
document.write("Eleminated: " + firstValue + "<br>");
document.write("After eleminating 3rd element: " + fifoArray.join(", ") + "<br>");



// Task8))

let lifoArray=[];

lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");

document.write("<h3>Task8 <br> Devices : </h3> " + lifoArray.join(", ") + "<br>");

let lastValue=lifoArray.pop();

document.write("Out: <br> " + lastValue + "<br>");

lastValue=lifoArray.pop();

document.write("Out: <br> " + lastValue + "<br>");
lastValue=lifoArray.pop();

document.write("Out: <br> " + lastValue + "<br>");

lastValue=lifoArray.pop();

document.write("Out: <br> " + lastValue + "<br>");



// Task9))
// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


document.write("<h3>Task9</h3><select>");


for (let i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}

document.write("</select>");
