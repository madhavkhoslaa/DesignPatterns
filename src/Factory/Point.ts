class PointSystem {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  static getCartesianPoint(x: number, y: number) {
    return new PointSystem(x, y);
  }
  static getPolarPoint(rho: number, theta: number) {
    return new PointSystem(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

const p = PointSystem.getCartesianPoint(1, 2);
const p2 = PointSystem.getPolarPoint(1, 2);
console.log({ p, p2 });
