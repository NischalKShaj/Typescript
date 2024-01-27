abstract class Shape {
  abstract calculateArea(): number;

  public display(): void {
    console.log(`Area : ${this.calculateArea()}`);
  }
}
class Circle extends Shape {
  private radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
const circle = new Circle(4);
circle.display();
