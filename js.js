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

//switch

let weekDay = 5;
switch(weekDay){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid value");
}

//bucle
//while

const cartItems =[
    {
        name:"Iphone 16",
        price:1700,
        curency:"$",
        amount:1
    },
    {
        name:"Protector sleeve",
        price:100,
        curency:"$",
        amount:3
    },
    {
        name:"Apple sticker",
        price:21.99,
        curency:"$",
        amount:4
    }
]

let totalPrice = 0;
let productIndex = 0;
while(productIndex < cartItems.length){
    let product = cartItems[productIndex];
      totalPrice += product.price * product.amount;
      productIndex++;
}

console.log("Your cart total:",totalPrice,cartItems[0].curency);

//do while loop

let n =4;
let currentNumber = 0;

do{
    currentNumber++;
    console.log(currentNumber);
}while(currentNumber<n);

    
