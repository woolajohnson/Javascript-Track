class Desk {
    constructor(name) {
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.color = "black";
    }
    mov(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    updateColor(new_color) {
        this.color = new_color;
        return this;
    }
}

const desk1 = new Desk("oak desk");
const desk2 = new Desk("maple desk");
desk1.updateColor("brown");
