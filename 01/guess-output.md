Guess the output of the codes below :-

1.
```js
function sayHello() {
  console.log("Hey You Called Me");
}
setTimeout(sayHello, 1000);

console.log("Hey You!");
```

 output
 // Hey You
 //Hey You Called Me after 1 sec delay

2.
```js
function sayHello() {
  console.log("Hey You Called Me");
}

setTimeout(sayHello, 0);

console.log("Hey You!");
```
 output
  // Hey You
 //Hey You Called Me without delay

3.
```js
function main() {
  console.log("A");
  setTimeout(function display() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
```
 output
 // A
 // C
 // B


4.
```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  console.log("A");
  setTimeout(function exec() {
    console.log("B");
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log("C");
}

 output

 // logs A
 //after delay of 3 seconds C
 // logs B

5. Look at the output of the code below to understand hwo things are happening.


function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  var current = Date.now();
  console.log("A", Date.now() - current);
  setTimeout(function exec() {
    console.log("B", Date.now() - current);
  }, 1000);
  runWhileLoopForNSeconds(3);
  console.log("C", Date.now() - current);
}

main();
// logs A 0 datenow- current is 0;
// logs C  after 3 seconds delay
// logs B after delay 1sec
// three logs having different time
```