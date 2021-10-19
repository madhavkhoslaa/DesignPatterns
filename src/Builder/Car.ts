import { FuelType } from "./FuelType";

class Car {
  protected cylinder: number;
  protected FuelType: FuelType;
  protected constructor(cylinder: number, FuelType: FuelType) {
    this.FuelType = FuelType;
    this.cylinder = cylinder;
  }
  getFuelType() {
    return this.FuelType;
  }
  getCylinder(): number {
    return this.cylinder;
  }
}

class CarBuilder extends Car {
  constructor() {
    super(4, FuelType.PETROL);
  }
  setFuelType(FuelType: FuelType) {
    this.FuelType = FuelType;
    return this;
  }
  setCylinder(cylinder: number) {
    this.cylinder = cylinder;
    return this;
  }
  build() {
    return new Car(this.cylinder, this.FuelType);
  }
}

const car = new CarBuilder();
console.log(car.getCylinder());
console.log(car.setCylinder(2).setFuelType(FuelType.PETROL));
console.log(car.getCylinder());
console.log(car.getFuelType());
const Builtcar = car.build();
console.log(Builtcar.getFuelType());
