var ninja1 = {
    hp: 100,
    strength: 15,
    attack: function () {
        return Math.floor(Math.random() * 16);
    },
};
var ninja2 = {
    hp: 150,
    strength: 10,
    attack: function () {
        return Math.floor(Math.random() * 11);
    },
};
let ninja1Hp = ninja1.hp;
let ninja2Hp = ninja2.hp;

for (let i = 1; i <= 10; i++) {
    console.log("===Round " + i + "===");
    let ninja1Attack = ninja1.attack();
    let ninja2Attack = ninja2.attack();
    ninja2Hp -= ninja1Attack;
    console.log(
        "Ninja1 attacks Ninja2 and does a damage of " +
            ninja1Attack +
            "! Ninja1 health: " +
            ninja1Hp +
            ". Ninja2 health: " +
            ninja2Hp
    );
    ninja1Hp -= ninja2Attack;
    console.log(
        "Ninja2 attacks Ninja1 and does a damage of " +
            ninja2Attack +
            "! Ninja1 health: " +
            ninja1Hp +
            ". Ninja2 health: " +
            ninja2Hp
    );
}
if (ninja1Hp > ninja2Hp) {
    console.log("Ninja1 WINS!!!!!");
} else if (ninja2Hp > ninja1Hp) {
    console.log("Ninja2 WINS!!!!!");
} else {
    console.log("IT'S A DRAW!!!!!");
}
