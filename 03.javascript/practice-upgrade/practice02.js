class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); //12

class Rectangle extends Shape {
  // 대각선 길이: Math.sqrt() 제곱근 구하는 함수
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

let rec2 = new Rectangle(3, 4);
console.log(rec2.getArea());
console.log(rec2.getDiagonal());

class Triangle extends Shape {
  //넓이
  getArea() {
    return (this.width * this.height) / 2;
  }
}
let triangle = new Triangle(3, 4);
console.log(triangle.getArea());

class Circle extends Shape {
  //radius 생성자 추가
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  //넓이
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
let circle = new Circle(0, 0, 3);
console.log(circle.getArea());
