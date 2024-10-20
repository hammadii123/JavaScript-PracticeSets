// Task1))Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


let num= +prompt("Enter the positive Integer:")

document.write(`<h3>Task1</h3> number :${Number(num)} <br>`)
document.write(` round off value :${Math.round(num)} <br>`)
document.write(` floor value :${Math.floor(num)} <br>`)
document.write(` ceil value :${Math.ceil(num)} <br> <hr>`)



// Task2))Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


let num1= +prompt("Enter the negative floating point number:")

document.write(`<h3>Task2</h3> number :${Number(num1)} <br>`)
document.write(` round off value :${Math.round(num1)} <br>`)
document.write(` floor value :${Math.floor(num1)} <br>`)
document.write(` ceil value :${Math.ceil(num1)} <br> <hr>`)


// Task3
// Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

let num2= +prompt("Enter the number:")

document.write(`<h3>Task3</h3>The absolute value of ${num2} is : ${Math.abs(num2)} <br> <hr> `)


// Task4
// Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:


function dice(){

    alert(`Task4: \n Your new number is : ${Math.round(Math.random() *6)} `)
    
}
// document.write("<br> <hr>")

// Task5
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser



function toss(){
    let round=Math.round(Math.random()*1);
    if(round===0){
        alert(`Task5: \n Random coin value "${round}" :\n Heads`)
    }else{
        alert(`Task5: \n Random coin value "${round}" : \n Tails`)
    }

}


// Task6
// Write a program that shows a random number between 1 
// and 100 in your browser

document.write(`<h3>Task6</h3> The random number between 1 and 100 is : ${Math.round(Math.random()*100)} <br> <hr>`)

// task7
// Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

let ask= prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms");
let weight= parseFloat(ask);
document.write(`<h3>Task7</h3>Your weight of user is : ${weight} kilograms <br> <hr>`)


// Task8

let randomNo= Math.round(Math.random()*10);

let choice =+prompt("Enter the number between 1 to 10 :")

if(choice===randomNo){
    alert("Task8 \n Congratulations! You guessed the correct number.")
}
else{
    alert("Task8 \n Sorry! You guessed wrong. The correct number was : " + randomNo)
}