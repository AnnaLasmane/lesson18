
//task 1

for (let i = 0; i <= 100; i++) {
    
if (i % 2 === 0 && i % 3 === 0)  {
    console.log('Fizz Bazz')  
} else if (i % 3 === 0) {
    console.log('Bazz')
}
else if (i % 2 === 0) {
    console.log('Fizz');  
}
 else {
    console.log(i);
}}

//task 2
for (let i = 1000 ; i >= 50; i-=7){
    
    if (i % 2 ===0) {
        console.log(i, 'is Even number');
    } else {
        console.log(i, 'is odd number');}
    }