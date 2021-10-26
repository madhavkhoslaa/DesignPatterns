class DoOperations {
  private static instance: DoOperations;
  random: number;
  private constructor() {
    this.random = Math.random();
  }
  static getInstance() {
    if (DoOperations.instance === undefined) {
      this.instance = new DoOperations();
      return this.instance;
    } else {
      return this.instance;
    }
  }
}

const a = DoOperations.getInstance();
console.log(a!.random);
const b = DoOperations.getInstance();
console.log(b!.random);
