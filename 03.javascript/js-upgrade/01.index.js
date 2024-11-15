//현재 es6 javascript 문법

//1-1. 배열의 구조분해 할당
const arr1 = ['tomato', 'kiwi', 'orange'];
console.log(arr1[0]); //tomato
const tomato = arr1[0];
const [a, b, c] = arr1;
console.log(tomato); //tomato
console.log(b); //kiwi

const arr2 = ['red', 'orange', 'pink', 'yellow'];
const [red, orange, , yellow] = arr2;
console.log(red, orange, yellow); //red orange yellow

const [a1, b1] = arr2;
console.log(b1); //orange

const [v1, v2, v3, v4, v5] = arr2;
console.log(v1, v2, v3, v4, v5); //red orange pink yellow undefined
// const [a1, b1] = arr2 // 맨 끝에 있는 요소들은 생략 가능

// 변수 교환(1) : 정석 방법
let value1 = 'second';
let value2 = 'first';

let temp; //값을 저장하기 위한 임시 변수

temp = value1; // temp = second
value1 = value2; //value1 = first, value2=first
value2 = temp; //value1 = first, value2=second

console.log(value1, value2); //first second

//변수 교환(2) : 배열의 구조분해 할당
value1 = 'second';
value2 = 'first';
[value2, value1] = [value1, value2];
console.log(value1, value2); //first second

//1-2. 객체의 구조분해 할당
const obj = {
  title: '제목',
  content: '내용',
  num: 10,
};

//값에 접근할 때는 점 접근법, 대괄호 접근법 이용
console.log(obj.title); //제목
console.log(obj['title']); //제목

// console.log(title); //undefined

const { num, title, content } = obj;
console.log(title); //제목
const { n1, t1, c1 } = obj;
console.log(n1); //undefined

const { content: c2, title: t2 } = obj;
console.log(t2, c2); //제목 내용

//2. spread와 rest ...
const arr3 = [1, 2, 3, 4, 5];
const arr4 = ['a', 'b', 'c'];
console.log(arr3); //[1, 2, 3, 4, 5]

for (let el of arr3) {
  console.log(el); //1 2 3 4 5
}

console.log(...arr3); //배열은 아님 // 1 2 3 4 5
console.log(...arr4); //요소 각각에 대한 작업은 할 수 없음

// arr3, arr4 합치기 -> 1차원 배열로
// - concat 문자열, 배열 모두 가능
const arr5 = arr3.concat(arr4);
console.log(arr5); //[1, 2, 3, 4, 5, 'a', 'b', 'c']
const arr6 = [arr3, arr4]; //2차원 배열
console.log(arr6); //[Array(5), Array(3)]
const arr7 = [...arr3, ...arr4];
console.log(arr7); //[1, 2, 3, 4, 5, 'a', 'b', 'c']

//2-2. string
const str = 'alliehigh';
let strToArr = [...str];
let str2ToArr = str.split('');
// string to array : split() -> 가능 but 전개 연산자가 좀 더 직관적
// array to string : join()
console.log(strToArr); //['a', 'l', 'l', 'i', 'e', 'h', 'i', 'g', 'h']
console.log(str2ToArr); //['a', 'l', 'l', 'i', 'e', 'h', 'i', 'g', 'h']

//2-3. object
//allie 진형님 ㅎㅎ
let obj1 = {
  name: 'suyeon',
  hobby: 'swim',
  friend: null,
  married: false,
};
let obj2 = {
  name: '수연',
  like: ['sleeping', 'programming'],
  greeting: function () {
    console.log(`안녕하세요, 저는 ${this.name}이고요...
        취미는 ${this.hobby}입니다.`);
  },
};
obj2.greeting(); //안녕하세요, 저는 수연이고요...취미는 undefined입니다.

let me = { ...obj1, ...obj2 };
console.log(me); //{name: '수연', hobby: 'swim', friend: null, married: false, like: Array(2), …}

me.greeting();
console.log(me); //안녕하세요, 저는 수연이고요...취미는 swim입니다.

me = {
  ...obj1,
  ...obj2,
  gender: 'female',
};
console.log(me);

// ...rest
function test(a, b) {
  console.log(a);
  console.log(b);
}
console.log('-----rest-----');
test(1, 2); // 1 2
test('안녕'); //안녕 undefined

function test2(...val) {
  console.log(val); //rest로 받운 준 결과는 배열임 // undefined
  const [a, b, c, ...rest] = val; //[2, 3, 4, 5, 6, 7, 8]
  console.log(a); //2
  console.log(b); //3
  console.log(c); //4
  console.log('rest', rest); //[5, 6, 7, 8]
}
test2(2, 3, 4, 5, 6, 7, 8);

//간단 퀴즈
// 매개변수(숫자)가 몇 개가 들어오든 합해서 반환하는 함수를 만들어보세요

function addNumber(...rest) {
  //   console.log(rest);
  let sum = 0;

  //   for (let i of rest) {
  //     sum += i;
  //   }

  rest.forEach(function (number) {
    sum += number;
  });

  return sum;
}

let sumResult = addNumber(1, 2, 3, 4, 5);
console.log('합한 결과값', sumResult); // 15
