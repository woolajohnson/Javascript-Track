class Note {
    constructor(name, pitch) {
        this.nameList = ["do", "re", "mi", "fa", "sol", "la", "ti"];
        if (!this.nameList.includes(name)) {
            console.log("Invalid note name");
        }
        if (pitch < 1 || pitch > 7) {
            console.log("Invalid pitch. Pitch should be between 1 and 7");
        }
        this.name = name;
        this.pitch = pitch;
    }

    show() {
        console.log(`Note: ${this.name}, Pitch: ${this.pitch}`);
    }
}

class Instrument {
    constructor() {
        this.record = [];
    }

    addNote(name, pitch) {
        const note = new Note(name, pitch);
        this.record.push(note);
    }

    removeLastNote() {
        this.record.pop();
    }

    changeNote(index, name, pitch) {
        if (index < 0 || index >= this.record.length) {
            console.log("Invalid index");
        }
        this.record[index] = new Note(name, pitch);
    }

    shuffleRecord() {
        for (let i = this.record.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.record[i], this.record[j]] = [this.record[j], this.record[i]];
        }
    }

    autoCompose(num) {
        this.record = [];
        for (let i = 0; i < num; i++) {
            const name = this.randomNoteName();
            const pitch = Math.floor(Math.random() * 7) + 1;
            this.addNote(name, pitch);
        }
    }

    randomNoteName() {
        const index = Math.floor(Math.random() * this.nameList.length);
        return this.nameList[index];
    }

    logRecord() {
        this.record.forEach((note) => note.show());
    }
}

class Piano {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}

class Xylophone {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}
