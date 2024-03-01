// 1.
var a = 10;
function abc() {
    var a = 15;
    console.log("a is", a);
}
console.log("a really is", a);
//a really is 10

// 2.
// var a = 10;
// function abc() {
//     var a = 15;
//     console.log("a is", a);
// }
// abc();
// console.log("a really is", a);
// a is 15
// a really is 10

// 3.
// if (a == undefined) {
//     console.log("a is declared but hasn't been set to a specific value yet");
// }
// Uncaught ReferenceError: a is not defined

// 4.
// if (a == undefined) {
//     console.log("a is declared but hasn't been set to a specific value yet");
// }
// var a = 15;
// a is declared but hasn't been set to a specific value yet

// 5.
// var a = 15;
// function abc(a) {
//     return a + 10;
// }
// var final = abc(a);
// console.log("final is", final);
//final is 25

// 6.
// var a = 15;
// function abc() {
//     a = a + 10;
// }
// console.log("a is", a);
// a is 15

// 7.
// var a = 15;
// function abc() {
//     a = a + 10;
// }
// console.log("a is", a);
// abc();
// console.log("a is", a);
// a is 15
// a is 25

// 8.
// var a = 15;
// function abc() {
//     var a = a + 10;
// }
// console.log("a is", a);
// abc();
// console.log("a is", a);
// a is 15
// a is 15

// 9.
// var a = 15;
// function abc(a) {
//     a = a + 15;
// }
// console.log("a is", a);
// abc();
// console.log("a is", a);
// a is 15
// a is 15
