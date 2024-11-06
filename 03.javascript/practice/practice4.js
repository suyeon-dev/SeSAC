//1. 1~100 배열을 for문으로 만들고,
//배열의 합을 for, for of, for each문으로 합 구하기

let numbers = [];
for (i = 1; i <= 100; i++) {
  numbers.push(i);
}
// console.log(numbers);

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];
}
console.log(`for문 사용한 합: ${sum1}`);

let sum2 = 0;
for (let num of numbers) {
  sum2 += num;
}
console.log(`for of문 사용한 합: ${sum2}`);

let sum3 = 0;
numbers.forEach((num) => {
  sum3 += num;
});
console.log(`for each문 사용한 합: ${sum3}`);

//문2-1. 내장 객체 Date
let today = new Date();
if (today.getDay() >= 1 && today.getDay() <= 5) {
  console.log('평일');
} else {
  console.log('주말');
}

//문3. 0~10 랜덤 숫자
//0<= x <=10, 내장 객체 Math 사용
console.log('랜덤 숫자: ', Math.floor(Math.random() * 11));

//문4. 내장 메소드 실습
// let fruits1 = [
//   '사과',
//   '딸기',
//   '파인애플',
//   '수박',
//   '참외',
//   '오렌지',
//   '자두',
//   '망고',
// ];
// let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

// //두 배열에서 동일 요소만 가지는 배열 same 만들기
// let same = fruits1.filter((fruit) => fruits2.includes(fruit));
// console.log(same);

// //두 배열에서 서로 다른 요소만 가지는 배열 diff 만들기
// let diff = [];

// for (let i = 0; i < fruits1.length; i++) {
//   if (!fruits2.includes(fruits1[i])) {
//     diff.push(fruits1[i]);
//   }
// }

// for (let i = 0; i < fruits2.length; i++) {
//   if (!fruits1.includes(fruits2[i])) {
//     diff.push(fruits2[i]);
//   }
// }
// console.log(diff);

// 참고사항 유의
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

let same = [];
let diff = [];

for (let fruit of fruits1) {
  if (fruits2.includes(fruit)) {
    same.push(fruit);
  } else diff.push(fruit);
}

console.log(same);
console.log(diff);
