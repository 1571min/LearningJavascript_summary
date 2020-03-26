class Car {
  static getNextVin() {
    return Car.nextVin++;
  }

  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.vin = Car.getNextVin();
  }

  static areSimilar(car1, car2) {
    return car1.make === car2.make && car1.model === car2.model;
  }

  static areSame(car1, car2) {
    return car1.vin === car2.vin;
  }
}

class InsurancePolicy {}
function makeInsurable(o) {
  o.addInsurancePolicy = function(p) {
    this.insurancePolicy = p;
  };
  o.getInsurancePolicy = function() {
    return this.insurancePolicy;
  };
}

const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());

console.dir(car1);
