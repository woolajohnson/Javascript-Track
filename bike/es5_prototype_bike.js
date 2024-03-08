function Bike(price, max_speed) {
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;
}
Bike.prototype.displayInfo = function () {
    console.log("Price: " + this.price);
    console.log("Maximum Speed: " + this.max_speed);
    console.log("Total Miles: " + this.miles);
    return this;
};
Bike.prototype.drive = function () {
    console.log("Driving");
    this.miles += 10;
    return this;
};
Bike.prototype.reverse = function () {
    console.log("Reversing");
    if (this.miles < 5) {
        this.miles = 0;
    } else {
        this.miles -= 5;
    }
    return this;
};

var bike1 = new Bike(30, "50mph");
bike1.drive().drive().drive().reverse().displayInfo();

var bike2 = new Bike(70, "100mph");
bike2.drive().drive().reverse().reverse().displayInfo();

var bike3 = new Bike(80, "120mph");
bike3.reverse().reverse().reverse().displayInfo();
