function emitRandomNumber(attempt = 1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 101);
            console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
            console.log("2 seconds have lapsed.");
            console.log(`Random number generated is ${random}.`);
            console.log("_ _ _ _ _");

            if (random < 80 && attempt <= 10) {
                emitRandomNumber(attempt + 1)
                    .then(resolve)
                    .catch(reject);
            } else {
                resolve(attempt);
            }
        }, 2000);
    });
}

emitRandomNumber()
    .then((message) => {
        console.log(`Total attempts: ${message}`);
    })
    .catch(() => {
        console.log("An error occurred during execution.");
    });
