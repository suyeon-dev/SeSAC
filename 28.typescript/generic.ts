//---------- 함수에서 generic 사용하기 ----------
// <T> 우리가 받아줄 타입의 이름
function printSome<T>(x: T, y: T): T {
  console.log('x와 y', x, y);
  return x;
}

// 호출 시 타입을 지정 (generic 사용)
printSome<number>(1, 2);
printSome<string>('1', '2');
printSome<boolean>(false, true);
// printSome<boolean>(false, 'true'); //Err: 타입이 다르므로 호출 불가능

//---------- generic 타입 매개변수가 2개인 경우 ----------
function printSome2<T, K>(x: T, y: K): T {
  console.log('x와 y', x, y);
  return x;
}

printSome2<number, string>(1, 'hello'); // 호출 시 2개의 타입 지정

//---------- 배열의 타입을 알 수 없을 때 any -> generic으로 변경 ----------

// any를 사용한 함수
function arrLength(arr: any[]): number {
  return arr.length;
}

// generic으로 개선한 함수
function arrLength2<T>(arr: T[]): number {
  // T 타입의 배열을 받고 길이를 반환
  return arr.length;
}

// any를 사용한 값 변환 함수
function getValue(val: any): any {
  return val; // 입력값 그대로 반환
}

// generic으로 개선한 함수
function getValue2<T>(val: T): T {
  // T 타입의 값을 받고 동일한 타입의 값을 반환
  return val;
}

console.log(arrLength2<string>(['a', 'b'])); // 문자열 배열 길이 출력
console.log(arrLength2<string | number>(['a', 'b', 1, 2])); //유니언 타입도 가능

console.log(getValue2<string[]>(['a'])); // 문자열 배열 반환

//---------- interface에서 generic 사용하기 ----------
interface Phone<T> {
  // T 타입의 옵션을 갖는 휴대폰 인터페이스
  company: string;
  createAt: Date;
  option: T;
}

const iphone15: Phone<string> = {
  company: 'apple',
  createAt: new Date('2023-10-13'),
  option: 'black',
};

console.log(iphone15);

// - option의 타입 만들어보기
type IphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<IphoneOption> = {
  company: 'apple',
  createAt: new Date('2024-10-06'),
  option: {
    color: 'silver',
    storage: 256,
  },
};
console.log(iphone16);
