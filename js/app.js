//variables 
const myNumber = 15;

// verify imput is a number
if (typeof myNumber === 'number'){
    console.log(typeof myNumber);
    // is a number equal evaluate
    if ((myNumber % 3) === 0) {
        console.log('Gen');
    }
    if ((myNumber % 5) === 0) {
        console.log('Buzz');
    }  
    if ((myNumber % 3) === 0 && (myNumber % 5) === 0){
        console.log("GenBuzz");
    }
}else{
    // not a number
    console.log("This is not a number")
    console.log(typeof myNumber);

}
// switch statement
const myItem = 'jeans';

switch(myItem.toLowerCase()){
    case "shoes" :
        console.log('Shoes are $50');
        break;
    case "jeans" :
        console.log('Jeans are $25');
        break;
    case "hat" :
        console.log('Hat is $12');
        break;
    case "socks" :
        console.log('Socks are $2');
        break;
    default :
        console.log('Error finding item');
}
// random integer between 50 and 100
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  console.log(getRandomInt(50, 100));