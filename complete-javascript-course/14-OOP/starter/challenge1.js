const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

console.log('BMW DETAILS');
const bmw = new Car('BWM', 120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.accelerate();

console.log('MERCEDES DETAILS');
const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
