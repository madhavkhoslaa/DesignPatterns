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
  constructor(
    public _Cylinder: number = 2,
    public _FuelType: FuelType = FuelType.DIESEL
  ) {
    super(_Cylinder, _FuelType);
  }
  setFuelType(FuelType: FuelType) {
    this._FuelType = FuelType;
    return this;
  }
  setCylinder(cylinder: number) {
    this._Cylinder = cylinder;
    return this;
  }
  build() {
    return new Car(this._Cylinder, this._FuelType);
  }
}

const car = new CarBuilder(2, FuelType.PETROL).build();
console.log(car);
const car2 = new CarBuilder()
  .setCylinder(0)
  .setFuelType(FuelType.ELECTRIC)
  .build();
console.log(car2);
