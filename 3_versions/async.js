const emitRandomNumber = async (attempt = 1) => {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                let random = Math.floor(Math.random() * 101);
                console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
                console.log("2 seconds have lapsed.");
                console.log(`Random number generated is ${random}.`);
                console.log("_ _ _ _ _");

                if (random < 80 && attempt <= 10) {
                    emitRandomNumber(attempt + 1);
                } else {
                    resolve();
                }
            }, 2000);
        });
    } catch (err) {
        console.log("There is an error occurred.");
    }
};
emitRandomNumber();
