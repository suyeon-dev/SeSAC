//(todo_1) shape 클래스 만들기
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

// (todo_2) shape 클래스 상속
/**
 * - 직사각형 넓이, 대각선 길이 함수
 * - 삼각형 넓이
 * - 원 넓이, radius 생성자 추가
 */

class Rectangle extends Shape {
  getDiagonal() {
    // Math.sqrt() 제곱근 구하는 함수
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}
let rec2 = new Rectangle(4, 5);
console.log(rec2.getArea(), rec2.getDiagonal());

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}
let triangle1 = new Triangle(3, 4);
console.log(triangle1.getArea());

class Circle extends Shape {
  constructor(radius) {
    super(0, 0);
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
let circle1 = new Circle(2);
console.log(circle1.getArea());
