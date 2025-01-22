// [1] tuple: 배열의 개수와 데이터타입 순서를 정하는 타입
let drink: [string, string];
drink = ['cola', '콜라'];

let drink2: [string, string, number] = ['cola', '콜라', 12];
// console.log(drink2);
// console.log(drink2[0]); // cola
drink2[0] = '사이다';
// console.log(drink2);

// readonly 옵션: 타입과 순서 완벽히 고정 -> 추후 수정 불가능
let drink3: readonly [string, string] = ['coloa', '콜라'];
// drink3[0] = '사이다'; // err

// [2] enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin); //0
console.log(Auth.user); //1
console.log(Auth.guest); //2

console.log(Cafe.americano); // 아메리카노

enum Cake {
  choco, //0
  vanilla, //1
  strawberry, //2
  kiwi = 'kiwi', // 혼합 가능하지만 권장x
}

console.log(Cake.choco); //0
console.log(Cake.vanilla); //1
console.log(Cake.strawberry); //2
console.log(Cake.kiwi); //kiwi

// [3] 사용자 정의 타입
// [3-1] interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'suyeon',
  isPassed: true,
};

console.log(student1);

// [3-2] type
type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';

// * interface도 상속 가능
interface 야구부 extends Student {
  // --- Student에서 상속받아온 정보
  //     name: string;
  //   isPassed: boolean;
  position: string;
  weight: number;
  height: number;
  readonly backnumber?: number; //  옵션값 ? 처리
  [grade: number]: Score; // 몇 개가 추가될지 모르는 값들
}

// --객체 만들기
const otani: 야구부 = {
  name: 'otani',
  isPassed: true,
  weight: 95,
  height: 193,
  backnumber: 17,
  position: 'pitcher',

  1: 'A',
  2: 'C',
};

// console.log(otani);
// console.log(otani.1); //err
console.log(otani[1]); // Key 값이 숫자인 경우 대괄호 접근법

otani['1'] = 'A+'; //성적 수정
otani.position = '투수';
console.log(otani);
// otani.backnumber = 11; // readonly 선언 후 수정 불가

// [] 인터페이스 함수
interface Calc {
  // (인자, 인자) : 리턴값
  (a: number, b: number): number;
}

const sum: Calc = (num1: number, num2: number) => {
  return num1 + num2; //number 리턴
};

// [교차타입 &] Toy와 Car의 정보를 모두 만족해야함
interface Toy {
  name: string;
  start(): void; // 함수 중 리턴타입이 없을 경우 void 타입
}

interface Car {
  name: string;
  color: string;
  price: number;
}

let toyCar: Toy & Car = {
  name: '타요',
  color: 'blue',
  price: 50000,
  start() {
    console.log(this.name, '의 가격은', this.price, '원 입니다'); //객체에서 사용가능한 This 키워드
  },
};

toyCar.start();

// [] 타입을 인터페이스처럼 사용 가능
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: 'Daniel',
  gender: 'f',
  age: 21,
};

// -- 성별을 좀 더 강력하게
// type Gender = 'Female' | 'Male';

// ---- 성별 같은 경우 Enum
enum GenderEnum {
  FEMALE = 'Female',
  MALE = 'Male',
}

type Gender = GenderEnum.MALE | GenderEnum.MALE;

type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let albert: Person2 = {
  name: 'Albert',
  like: ['car'],
  //   gender: 'Male',
  gender: GenderEnum.MALE, // 똑같은 문자열이지만 enum
};

console.log(albert.gender);
console.log(daniel.age);
