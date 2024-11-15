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
