/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?
// partnah log first
// Howdy log second


/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(function(){console.log("Welcome")},3000)
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log("Hello");
  setTimeout(function(){console.log("Good Bye")},3000)
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */
var every;
function brokenRecord() {
  // ADD CODE HERE
 every=setInterval(() => {
  console.log("hi again")
}, 1000);

}

function clear(event){
  console.log(event.target)
  clearInterval(every)
}

document.addEventListener("keydown",clear);
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
var stop= setInterval(() => {
  console.log("hi every second")
},1000);
setTimeout(() => {
  clearInterval(stop)
}, 5000);

}
limitedRepeat();

// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func,interval,duration) {
  // ADD CODE HERE
  var timer= setInterval(func, interval*1000);
  setTimeout(() => {
    clearInterval(timer)
  }, duration*1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
    console.log('This is the end!');
  }
  everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
