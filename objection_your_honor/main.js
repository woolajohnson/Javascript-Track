class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Prosecutor extends Person {
    constructor(name, age) {
        super(name, age);
    }

    prosecute(defendant, caseInstance) {
        defendant.case = caseInstance;
        const verdict = Case.computeVerdict(defendant, this);
        defendant.verdict = verdict;
    }
}

class Defendant extends Person {
    constructor(name, age) {
        super(name, age);
        this.case = null;
        this.verdict = null;
    }
}

class Case {
    constructor(title, years, months, days, minAge, maxAge) {
        this.title = title;
        this.years = years;
        this.months = months;
        this.days = days;
        this.minAge = minAge;
        this.maxAge = maxAge;
    }

    static computeVerdict(defendant, prosecutor) {
        if (
            defendant.age >= defendant.case.minAge &&
            defendant.age <= defendant.case.maxAge
        ) {
            return "GUILTY";
        } else {
            return "NOT GUILTY";
        }
    }

    static computeReleaseDate() {
        // For simplicity, let's assume release date is 3 years after the current date
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() + 3);
        return currentDate.toDateString();
    }
}

class TrialCourt {
    static initiateTrial(defendant, prosecutor) {
        const verdict = Case.computeVerdict(defendant, prosecutor);
        console.log(`
            Name: ${defendant.name}
            Age: ${defendant.age} years old
            Case Title: ${defendant.case.title}
            Filed by: ${prosecutor.name}
            Verdict: ${verdict}
        `);

        if (verdict === "GUILTY") {
            const releaseDate = Case.computeReleaseDate();
            console.log(`Release date: ${releaseDate}`);
        }
    }
}

// Example usage:
// let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
// let prosecutor = new Prosecutor("John", 30);
// let defendant1 = new Defendant("Girlie", 5);

// prosecutor.prosecute(defendant1, case1);
// TrialCourt.initiateTrial(defendant1, prosecutor);

let case2 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor("John", 30);
let defendant2 = new Defendant("Onel", 25);

prosecutor.prosecute(defendant2, case2);
TrialCourt.initiateTrial(defendant2, prosecutor);
