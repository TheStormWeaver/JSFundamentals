class Figure {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  calcArea() {
    throw new Error('You have to implement the calcArea() method in a descendant class!');
  }
}

class Rectangle extends Figure {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }
}

class Circle extends Figure {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  calcArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let rect = new Rectangle(100, 150, 5, 6);
console.log("Rect =", rect);
console.log("Rect area =", rect.calcArea());

let circle = new Circle(100, 50, 20);
console.log("Circle =", circle);
console.log("Circle area =", circle.calcArea());
