


function welcomeMessage() {
    console.log("Welcome to Mashtak to booking Co-working Space!");
  }
  
  window.onload = welcomeMessage; // Call the function when the page l

  let name = "Mashtak"; // String
let age = 2; // Number
let isActive = true; // Boolean

console.log("Name:", name);
console.log("Age:", age);
console.log("isActive:", isActive);

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:",   
 difference);
console.log("Product:", product);
console.log("Quotient:", quotient);   


document.write("<h1>Calculated Results</h1>");
document.write("<p>Sum: " + sum + "</p>");
document.write("<p>Difference: " + difference + "</p>");
document.write("<p>Product: " + product + "</p>");
document.write("<p>Quotient: " + quotient + "</p>");

function checkAge(age) {
    if (age >= 18) {
      alert("You are eligible to register.");
    } else {
      alert("You must be 18 years or older to register.");
    }
  }
  

  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
  }
  function validateEmail() {
  
    let email = document.getElementById("email").value;
    if (email === "") {
      alert("Please enter a valid email address!");
      return false; // Prevent form submission
    }
    return true; // Allow form submission
  }

  function onSubmit(){
    validateEmail();
    let userAge = document.getElementById("userAge");
    let myAge;
    if (userAge != null) {
      myAge = userAge.value;
      checkAge(myAge);
    }else {
        myAge = null;
    }
  }