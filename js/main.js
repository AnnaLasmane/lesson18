const number1 = 4;


switch (number1) {
    case 1:
        console.log('Value is 1')
        break;
 case 2:
        console.log('Value is 2')
        break;
case 3:
        case 4:
         console.log('Value is 3 or 4')
         break;
            
    default:
        console.log('Value is not between 1 and 3')
        break;
} //if else gandriz tas pats // breals are super importaint


const url = '/users';
switch (url) {
    case '/users':
        console.log('load the users page')
        break;
    case '/about-us':
        console.log('load the about us')
         break;
    case '/contacts':
        console.log('load the contacts page')
            break;

    case '/':
            console.log('load the homepage')
            break;
    default:
        console.log('Load 404')
        break;
}

//LOOPS LOOPS LOOPS
// while checks conditoon first//. only if the conditoon is true

let number2 = 0;
while (number2 < 10) {
if (number2 % 2 ===0) {
    console.log(number2, 'is Even number');
} else {
    console.log(number2, 'is odd number');}
    number2++
}
/////////////////// do while does not check conditions , reads as it is
let number3 = 0;
do {
    console.log('yey, looping');
    number3++;
} while(number3 > 10);// will always run atleast once
//////////////////
///////
for (let i = 0; i < 10; i++){
    
    if (i % 2 ===0) {
        console.log(i, 'is Even number');
    } else {
        console.log(i, 'is odd number');}
    }
const number4 = 3.14;
    for (let i = 100; i > 0; i--){
        console.log(i, number4); // tikai bloka elementus izpilda, ka ari ja PIRMS ta  kaut kas ir rakstits ka const nr4
    }
    console.log(i); // nemens preti

    ///// piemers
    const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw']; // console.log(cars[i]);
for (var i = 0; i < cars.length; i++) {
   //debugger;
   cars[i] += ' is a nice car!';
}
console.log(cars);

///// task
for (let i = 0; i < 10; i++){
    
    if (i % 2 ===0) {
        console.log(i, 'is Even number');
    } else {
        console.log(i, 'is odd number');}
    }