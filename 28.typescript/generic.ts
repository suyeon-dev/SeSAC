//---------- 함수에서 generic 사용하기
// <T> 우리가 받아줄 타입의 이름
function printSome<T>(x: T, y: T): T {
  console.log('x와 y', x, y);
  return x;
}

printSome<number>(1, 2);
printSome<string>('1', '2');
printSome<boolean>(false, true);
// printSome<boolean>(false, 'true');

// [] 2개일 때
function printSome2<T, K>(x: T, y: K): T {
  console.log('x와 y', x, y);
  return x;
}

printSome2<number, string>(1, 'hello');

// [] 어떤 배열이 들어오는 지 모를 때 any -> Generic으로 바꾸기
function arrLength(arr: any[]): number {
  return arr.length;
}

function getValue(val: any): any {
  return val;
}

function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

function getValue2<T>(val: T): T {
  return val;
}

console.log(arrLength2<string>(['a', 'b']));
console.log(arrLength2<string | number>(['a', 'b', 1, 2])); //유니언 타입 가능

console.log(getValue2<string[]>(['a']));

//---------- interface에서 generic 사용하기
interface Phone<T> {
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
