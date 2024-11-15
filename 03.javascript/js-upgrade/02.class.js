// class : 객체를 만들 때 사용하는 틀
/**
 * 속성: 만들어진 연도, 집의 이름, 창문의 개수
 * 함수(메서드): 건물 나이 메서드, 창문의 개수 출력 메서드
 */

class House {
  constructor(name, year, window) {
    this.name = name;
    this.year = year;
    this.window = window;
  }
  getAge() {
    console.log(`${this.name}은 건축한 지 ${2024 - this.year}년 되었어요.`);
  }
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    //old의 창문은 1개 입니다.
  }
}

const house1 = new House('old', 1789, 1);
house1.getAge();
house1.getWindow();
console.log(house1.name); //old

const house2 = new House('자이', 2015, 10);
house2.getAge();
house2.getWindow();
console.log(house2.name); //자이

console.log('------상속------');
//Apartment 가 House에 포함되는 관계
class Apartment extends House {
  constructor(name, year, window, floor, windowMaker) {
    super(name, year, window);
    this.floor = floor;
    this.widnowMaker = windowMaker;
  }

  //메서드 추가
  getAptInfo() {
    return `${this.year}년에 지어진 ${this.floor}층.
    층수는 ${this.floor}층이고, 창문의 개수는 ${this.window}개 입니다.`;
  }

  //overriding (메서드 재정의)
  //부모 클래스의 메서드(getAge, getWindow)를 이름을 똑같이 쓰고 싶지만,
  //내용은 다르게 만들고 싶을 때
  getWindow() {
    console.log(
      `${this.name}의 창문은 ${this.window}개 입니다. ${this.windowMaker}에서 만들었어요.`
    ); //raemian의 창문은 6개 입니다. undefined에서 만들었어요.
  }
}
const ap1 = new Apartment('raemian', 2023, 6, 19, 'KCC');
ap1.getAge();
ap1.getWindow();
console.log(ap1.getAptInfo()); //2023년에 지어진 19층.층수는 19층이고, 창문의 개수는 6개 입니다.
console.log(ap1); //Apartment {name: 'raemian', year: 2023, window: 6, floor: 19, widnowMaker: 'KCC'
