// 1. Create a function that takes another function as its argument.  Have the function execute the passed function.
function print(callback) {
    callback();
}
function greet() {
    console.log("I love Javascript!");
}
print(greet);

// 2. Create a function that returns a function.  Have the returned function be executed.
function numbers() {
    return function (a, b) {
        let sum = a + b;
        console.log(sum);
    };
}
numbers()(5, 3);

// 3. Create a function that takes two functions as its arguments.  Randomly, either execute the first function or the second function.
function random(callback1, callback2) {
    let number = Math.random();
    if (number >= 0.5) {
        callback1();
    } else {
        callback2();
    }
}
function react() {
    console.log("Hello React JS");
}
function javascript() {
    console.log("Hello Javascript!");
}
random(react, javascript);
