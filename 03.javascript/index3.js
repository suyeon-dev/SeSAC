/**
 * 함수
 * - 특정 작업을 수행하기 위해 설계된 코드 집합
 * - 함수의 선언 구조
 * - 키워드: function
 * - 함수의 이름: camelCase로 함수의 이름 작성
 * - (매개변수): 함수 내부에서 사용할 변수
 * - {스코프}: 함수의 내부 코드
 * 함수 선언문, 함수 표현식
 * - 함수 표현식: 변수에 함수를 저장
 * - 함수 선언문: 명시적 함수 선언
 */
helloWorld1();
console.log('선언되기 전');
function helloWorld1() {
  console.log('hello world1');
}
console.log('선언 후');
helloWorld1();

function helloWorld2() {
  // return 키워드
  // 함수 내부 코드의 최종 결과값을 보관하기 위한 키워드
  return 'hello world 2';
  console.log('리턴 아래입니다...');
}
console.log(helloWorld2());

// helloWorld3(), err! 선언되기 전에 호출 불가능
const helloWorld3 = function () {
  console.log('hello world 3');
};

helloWorld3();

// 3. 화살표 함수
// helloWorld4(), err! 선언되기 전에 호출 불가능
const helloWorld4 = () => {
  console.log('hello world 4');
};
helloWorld4();

// 4. 매개변수가 있는 함수 만들기
//4-1. 매개변수 1개, 함수 선언문
function sayHello1(text) {
  return text;
}

console.log(sayHello1('안녕!'));

//4-2. 매개변수 2개, 함수 선언문
function sayHello2(text, name) {
  return `${text}! ${name}`;
}
console.log(sayHello2('안녕', 'suyeon'));

//4-3. 매개변수 2개, 함수 표현식
//내부 스코프 console.log로 작성
const sayHello3 = function (text, name) {
  return `${text}! ${name}`;
};
console.log(sayHello3('안뇽', 'suyeon'));

//4-4. 매개변수 2개, 화살표 함수
const sayHello4 = (text, name) => {
  return `${text}! ${name}`;
};

const sayHelloValue = sayHello4('오늘', '점심 뭐 먹지');
console.log(sayHelloValue);
