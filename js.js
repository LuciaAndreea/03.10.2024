console.log("hello");

let userAge = 18;
let legalAge = 18;
let isLegal = userAge >=legalAge;

if(isLegal){
    console.log("Utilizatorul poate vota")
}else{
    console.log("Utilizatorul nu poate vota")
}

//operatorul ternar

let userEnteredPassword = "123pass";
let correctPassword = "123pass";

let accessMesssage = userEnteredPassword == correctPassword ? "Access granted" : " Access denied";  

console.log("User has access: ",accessMesssage);

//if...else if...else

let actualScore = 100;
let minimumScore = 50;
let averageScore = 70;
let maximumScore = 100;

if(actualScore ===100){
    console.log("Congratulations! Your score is perfect.")
}else if(actualScore < maximumScore && actualScore>averageScore){
    console.log("Congratulations! You score is great.")
}else if(actualScore<=averageScore && actualScore>=minimumScore){
    console.log("Congratulations! You got a passing score")
}else if(actualScore < minimumScore){
    console.log("We are sorry, but your score is too low.Try again.")
}else{
    console.log("Your score could not be verified")
}

