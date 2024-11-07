// 내장 메소드와 내장 객체 실습

//1. 배열과 반복문

let numbers = [];

for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}
console.log(numbers);

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];
}

let sum2 = 0;
for (let i of numbers) {
  sum2 += i;
}

let sum3 = 0;
//forEach의 콜백함수는 배열의 각 요소를 하나씩 받아옴
//i는 현재 순회 중인 요소의 값
numbers.forEach(function (i) {
  sum3 += i;
});

//화살표함수1 (위의 forEach와 동일)
numbers.forEach((i) => {
  sum3 += i;
});

//화살표함수2 (위의 forEach와 동일)
numbers.forEach((i) => (sum3 += i));

console.log(sum1, sum2, sum3);

//2. 내장 메소드 실습
// 두 배열에서 동일 요소만 가지는 배열 Same, 서로 다른 요소 가진 배열 diff
//참고) fruits1은 fruits2를 포함
let fruits1 = [
  '사과',
  '딸기',
  '파인애플',
  '수박',
  '참외',
  '오렌지',
  '자두',
  '망고',
];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

console.log('----풀이1: filter와 includes');
let same = fruits1.filter(function (el) {
  return fruits2.includes(el);
});
let diff = fruits1.filter(function (el) {
  return !fruits2.includes(el);
});

//화살표 함수 연습
let same1 = fruits1.filter((el) => fruits2.includes(el));
let diff1 = fruits1.filter((el) => !fruits2.includes(el));

console.log(same, diff);
console.log(`화살표함수-same: ${same1} -diff: ${diff1}`);

console.log('----풀이2: for문');
let same2 = [];
let diff2 = [];
for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same2.push(fruits1[i]);
  } else {
    diff2.push(fruits1[i]);
  }
}
console.log(same2);
console.log(diff2);
