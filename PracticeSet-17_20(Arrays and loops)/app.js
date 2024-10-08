// Task1:
// Declare and initialize an empty multidimensional array.
// (Array of arrays)
let array=[];

// TAsk2:
// Declare and initialize a multidimensional array 
// representing the following matrix:
// 0 1 2 3
// 1 0 1 2 
// 2 1 0 1

document.write("<h3>Task2 :</h3>")
const matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
  }

// Task3
// Write a program to print numeric counting from 1 to 10.
document.write("<h3>Task3 :</h3>")
let i=1
for ( i; i<=10; i++){
    document.write(`${i} <br>`)
   
}

// Task4))Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user

let no=+prompt("Enter the number to print its table")
let length=prompt("Enter the length of the mulitiplication table:")
document.write(`<h3>Task4 :Multiplication Table of ${no} </h3> <br> Length : ${length} <br>`)
for (i=1; i<=length; i++){
    
    document.write(`${no} * ${i} = ${no*i} <br> `)
}

// Task5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"]

document.write("<h3>Task5:</h3> <br>")
for (i=0; i<fruits.length; i++){
    document.write(`${fruits[i]} <br>`);
}


// Task6
// Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// a)

document.write("<h3>Task6:</h3>")
let num=0;
document.write(`<h3>Counting :</h3>`)
for(num = 0; num <=15; num++){
    document.write(num +", ")
}
document.write("<br>")
// b)
document.write(`<h3>Reverse counting :</h3> `)
for (num=10 ; num>=1; num--){
    document.write(` ${num} , `)
}
document.write("<br>")

// c)


document.write("<h3>Even:</h3>")
for(let no=0 ; no<=20; no++){
    
    if(no%2===0){
        document.write(no + " ")
        
       
    }
}

document.write("<br>")


// d))

document.write("<h3>Odd:</h3>")
for(let num=0 ; num<=20; num++){
    
    if(num%3===0){
        document.write( num+ " " )
        
    }
}


document.write("<br>")


// e))
document.write("<h3>Series:</h3>")
for (let no=1;no<=20;no++){
    if (no%2===0){
        document.write(no + "k ")
    }
}


// Task7
// . You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Task7)Enter the item to search: ").toLowerCase(); 
if (A.includes(userInput)) {
    let index = A.indexOf(userInput); 
    alert(`7)) ${userInput} is found in the list at index ${index}.`);
} else {
    alert(`7)) ${userInput} is not found in the list.`);
}



// task8
// Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

let a = [24, 53, 78, 91, 12];
let maximum = Math.max(...a);
document.write(`<h5>Array A:</h5>`);
for (let i = 0; i < a.length; i++) {
    document.write(` "${a[i]}" `);
}
document.write(`<br><h3>Task 8:</h3> The largest number is: ${maximum} <br>`);

// // task9
// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

let b = [24, 53, 78, 91, 12];
let minimum = Math.min(...b);
document.write(`<h5>Array B:</h5>`);
for (let i = 0; i < b.length; i++) {
    document.write(` "${b[i]}" `);
}
document.write(`<br><h3>Task 9:</h3> The smallest number is: ${minimum} <br>`);

// Task10)
// Write a program to print multiples of 5 ranging 1 to 
// 100
document.write("<h3>Task10:</h3>")
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {  
        document.write(i +"  ");  
    }
}