// Task1
let ch=prompt("1))Enter the number or string please")
if (ch.length==1){
   

  

        if (ch >= '0' && ch <= '9') {
            alert(`${ch} is a number`);
        } else {
            alert(`${ch} is a string`);


            if(ch==ch.toUpperCase()){
    
                alert(`${ch} is an uppercase letter`)
            }
    
            else{
                
                alert(`${ch} is a lowercase letter`)
            }
        }
        

        
    

 



}

else{
    alert("Please enter a single character")
}



// Task2
//Q) Write a JavaScript program that accept two integers anddisplay the larger. Also show if the two integers are equal
let int1=+prompt("2))Enter the integer 1:")
let int2=+prompt("2))Enter the integer 2:")

if(int1>int2){
    alert(`${int1} is greater than ${int2}`)
}
else if(int1===int2){
    alert(`${int1} and ${int2} are equal`)
}

else{
    alert(`${int2} is greater than ${int1}`)
}


// Task3
// q)Write a program that takes input a number from user & state whether the number is positive, negative or zero.
let no=+prompt("3))Please input any number:")

if(no>0){
    alert(`${no} is a positive number`)
}

else if(no<0){
    alert(`${no} is a negative number`)
}

else{
    alert(`${no} is zero`)
}

// Task4
//q) Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
let character=prompt("4))Enter the character you want to check:")

if(character.length===1 && (character==="a" || character==="e" || character==="i" || character==="o" || character==="u" || character==="A" || character==="E" || character==="I" || character==="O" || character==="U")){
    alert(`${character} is a vowel`)
}


else{
    alert(`${character} is not a vowel`)
}


// Task5
// q)Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then  give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are  same, show message “Correct! The password you  entered matches the original password”. Show  “Incorrect password” otherwise “Incorrect password” otherwise


let password="user123"

let enteredPassword=prompt("5))Enter your password:");
if(!enteredPassword) {
    alert("Please enter your password")

}

else if(enteredPassword===password){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}

// Task6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }



var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
alert(`6)) ${ greeting}`)


// Task7))

let time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");


if(time>=0 && time <1200){
alert("Good morning")
}

else if(time>=1200 && time <1700){
alert("Good afternoon")
}

else if(time>=1700 && time <2100){
alert("Good evening")
}

else if(time>=2100 && time <=2359){
alert("Good night")
}

else{
alert("Invalid time entered")
}