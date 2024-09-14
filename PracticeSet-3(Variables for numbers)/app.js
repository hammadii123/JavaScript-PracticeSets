var age =20;
alert('1)) \n I am ${age} years old');



// Task2))
// / Check if visitCount is already in localStorage
if (localStorage.getItem('visitCount')) {
    
    let visitCount = parseInt(localStorage.getItem('visitCount'), 10);
    visitCount += 1;
    localStorage.setItem('visitCount', visitCount);
} else {
    
    localStorage.setItem('visitCount', 1);
}


document.write("Task2) <br> You have visited this site " + localStorage.getItem('visitCount ') + " times."+"<br>" +"<br>");




// 3))
let birthYear=2004;
document.write("Task3) <br> My birth year is : " + birthYear + "<br>" + "<br>")


// Task4)

let visitorName = prompt("Enter your name:");
let productTitle = prompt("Enter the product title:");
let quantity = +prompt("Enter the quantity you want to order:");


document.write("Task4) <br> <h1>Order Confirmation</h1>");
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");
