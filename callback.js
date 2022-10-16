// Simple Function execution
// const simpleFunc = (name) => {
//   console.log('Hello World', name);
// }

// simpleFunc();


// const parentFunc = () => {
//   simpleFunc(); // execution inside other function
// }


// Callback execution
// const parentFuncTwo = (logFunc) => {
//   logFunc('Sanjay');
// }


// parentFuncTwo(simpleFunc); // passing a function( simpleFunc ) as arguement to other function


// const games = ['Foot', 'Volley', 'Hand', 'Basket'];


// print 
/**
 * Footbal
 * Volleyball
 * Handball
 * Basketball
 */

// const joinBall = (game, i) => {
//   console.log(`${game}ball`, i);
// }


// games.forEach(joinBall); // using callback function

/**
 * joinBall('Foot');
 * .
 * .
 * joinBall('Basket');
 */

// games.map

// const arr = [1, 2, 3, 4];

// const isOdd = (num) => num % 2; // 1 ---> true, 0 --> false

// console.log(arr.filter(isOdd));

// console.log(arr.filter((num) => num % 2)); // anonymous callback


// document.body.addEventListener('click', )

// setTimeout(() => {

// }, 5000);


console.log('Line 1'); // sync operation

setTimeout(
  () => {
    console.log('Line 2'); // async operation which wait for some seconds ( five seconds)
  }, 5000);

console.log('Line 3'); // sync


setTimeout(() => {
  console.log('Line 4'); // async operation which wait for some seconds ( four seconds)
}, 4000);

console.log('Line 5');