// Create a function called EmitRandomNumber().  In this function, after 2 full seconds (2000 ms), have it generate a random number between 0 to 100.  If the random number generated is below 80, have it call that function again, up to 10 times, until the random number generated is greater than 80.

// After the program is run, have it generate a log such as follows:

/*
Attempt #1. EmitRandomNumber is called.
2 seconds have lapsed.
Random number generated is 35.
- - - - -
Attempt #2. EmitRandomNumber is called.
2 seconds have lapsed.
Random number generated is 76.
- - - - -
Attempt #3. EmitRandomNumber is called.
2 seconds have lapsed.
Random number generated is 53.
- - - - -
Attempt #4. EmitRandomNumber is called.
2 seconds have lapsed.
Random number generated is 85.
- - - - -

*/
function EmitRandomNumber(attempt = 1) {
    let random = Math.floor(Math.random() * 101);
    let startTime = new Date().getTime();
    while (new Date().getTime() - startTime < 2000) {}
    console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
    console.log("2 seconds have lapsed.");
    console.log(`Random number generated is ${random}.`);
    console.log("_ _ _ _ _");
    if (random < 80 && attempt <= 10) {
        EmitRandomNumber(attempt + 1);
    }
}
EmitRandomNumber();
