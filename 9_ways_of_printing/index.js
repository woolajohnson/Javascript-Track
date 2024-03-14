// 1 function expression
const print_str = function (message) {
    console.log(message);
};
print_str("I love Javascript!!!");

// 2 arrow function
const print = (message) => {
    console.log(message);
};
print("I love Javascript!!!");

// 3 self-invoking function
(function (message) {
    console.log(message);
})("I love Javascript!!!");

// 4 IIFE
(() => {
    console.log("I love Javascript!!!");
})();

// 5 for loop
for (let i = 0; i < 1; i++) {
    console.log("I love Javascript!!!");
}

// 6 while loop
let count = 1;
while (count > 0) {
    console.log("I love Javascript!!!");
    count--;
}

// 7 class method
class Printer {
    print(message) {
        console.log(message);
    }
}
const printer = new Printer();
printer.print("I love Javascript!!!");

// 8 class static
class PrinterClass {
    static print(message) {
        console.log(message);
    }
}
PrinterClass.print("I love Javascript!!!");

// 9 template literals
const message = "I love Javascript!!!";
console.log(`${message}`);
