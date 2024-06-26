class Bike {
    constructor(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log("Price: " + this.price);
        console.log("Maximum Speed: " + this.max_speed);
        console.log("Total Miles: " + this.miles);
        return this;
    }
    drive() {
        console.log("Driving");
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log("Reversing");
        this.miles < 5 ? this.miles : (this.miles -= 5);
        return this;
    }
}

let bike1 = new Bike(30, "50mph");
bike1.drive().drive().drive().reverse().displayInfo();

let bike2 = new Bike(70, "100mph");
bike2.drive().drive().reverse().reverse().displayInfo();

let bike3 = new Bike(80, "120mph");
bike3.reverse().reverse().reverse().displayInfo();
