// Task1
// Write a program that takes two user inputs for first and  last name using prompt and merge them in a new variable  titled fullName. Greet the user using his full name
let first_name=prompt("Enter your first name: ");
let last_name=prompt("Enter your last name: ");
let fullname=(`${first_name} ${last_name}`);
document.write(`<h3>Task1:</h3>Hello ${fullname} <br>`);

// Task2
// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

let favModel=prompt("Enter your favorite mobile phone model: ");
let len=favModel.length;

document.write(`<h3>Task1:</h3>  My favourite phone is: "${favModel}" and its length is : ${len} <br>`);

// Task3
let word=prompt("Enter any word to find it's letter's index:")
let index=prompt(`Now find the index of any letter in "${word}" `)
if (word.includes(index)){
    document.write(`<h3>Task3:</h3> The index of letter "${index}" in "${word}" is = ${word.indexOf(index)} `)
}
else{
    document.write(`<h3>Task3:</h3> The letter "${index}" is not found in "${word}" `)
}





// Task4
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
let word2=prompt("Enter any word to find it's letter's index:")

let index2=prompt(`Now find the last index of any letter in "${word2}" `)

if(word2==="") {
    word2="Hello world"
    index2="l"
    if (word2.includes(index2)){
        document.write(`<h3>Task3:</h3> The index of letter "${index2}" in "${word2}" is = ${word2.lastIndexOf(index2)} `)
    }
    else{
        document.write(`<h3>Task3:</h3> The letter "${index2}" is not found in "${word2}" `)
    }
}
else if(word2.includes(index2)) {
    document.write(`<h3>Task3:</h3> The index of letter "${index2}" in "${word2}" is = ${word2.lastIndexOf(index2)} `)
}

else{
    document.write(`<h3>Task3:</h3> The letter "${index2}" is not found in "${word2}" `)
}

// Task5
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
let ch="Pakistani";
document.write(`<h3>Task4:</h3>String : "${ch}" <br> Character at index 3 is "${ch[3]}"`);

// Task6

let f_name=prompt("Enter your first name: ");
let l_name=prompt("Enter your last name: ");
let fullName=f_name.concat(` ${l_name}`);
document.write(`<h3>Task6:</h3>Hello ${fullName} <br>`);

// Task7
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser
let city="Hyderabad";
let replaced=city.replace("Hyder","Islam");
document.write(`<h3>Task7:</h3> City : ${city} <br> After replacement : ${replaced} <br>`);


// Task8
let message="Ali and Sami are best friends. They play cricket and football together.";
let replaced2=message.replaceAll("and","&");
document.write(`<h3>Task8:</h3> Message : ${message} <br> Replaced and with &: ${replaced2}` )


// Task9
// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
let value="472";
let str= Number(value);
document.write(`<h3>Task9:</h3> Value : ${value} <br> Type: ${typeof(value)} <br> Value : ${str} <br> Type : ${typeof(str)}`);

// Task10
let inp=prompt("10) Enter any word/letter or sentence:")

let upper=inp.toUpperCase();
document.write(`<h3>Task10:</h3> User input : ${inp} <br> Upper case : ${upper} `)

// Task11
// Write a program that takes user input. Convert and show the input in title case.
// let user=prompt("Enter any input word/letter or sentence to convert in Title case:")
// document.write(`<h3>Task11:</h3> User input : ${user} <br> Title case :${user.t}`)

// Task12
// Write a program that converts the variable num to  string.var num = 35.36 ;Remove the dot to display “3536” display in your browser
let num =35.36;

let strNum=num.toString().replace(".", "");
document.write (`<h3>Task11:</h3> Number : ${num} <br> Result: ${strNum} `)








// Task14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let msg=prompt("Welcome to Metro bakery.What do you want to order sir /ma'am:")

let found=false;
for (i=0;i<A.length;i++){
    if (A[i]==msg.toLowerCase() ){
        found=true;
        document.write(`<h3>Task14:</h3> Item "${A[i]}" is available in our bakery at index ${i+1} <br>`)
        break;
    }

    
   
}

if(!found){
    document.write(`<h3>Task14:</h3> We are sorry ,  "${msg}" is not available at our bakery. <br>`)
}



// Task15

// Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document

let pass=prompt("Enter the password :");

// c
if(pass.length<6){
    document.write("Password must be at least 6 characters long");




}

// b
else if(!isNaN(pass[0])){
    document.write("Password must not start with a number");
    
    
}



// a
else{
let number=false;
let alphabets = false;


for(let i=0;i<pass.length;i++){
    if((pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90) || (pass.charCodeAt(i))>=97 && pass.charCodeAt(i) <=122){
        
        alphabets=true;

    }

    else if(pass.charCodeAt(i)>=48 && pass.charCodeAt(i)<=57){
        number=true;
    }

}




if(number==false || alphabets==false){
    document.write("Password must contain alphabets and numbers")
}
else{
    document.write("Valid Password")
}



}