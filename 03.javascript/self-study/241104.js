// 1. 간단실습
let number = 123;
let string = '개발자 될래요';

// console.log(`${typeof number} isn't ${typeof string} data type.`);

//2. 함수만들기1
//-함수선언문 형식
function multifly(num1, num2) {
  return num1 * num2;
}
// console.log(multifly(3, 7));

//3. 함수만들기2
//-함수표현식
let square = function (num) {
  return num ** 2;
};
// console.log(square(2));
// console.log(square(8));

//4. if문 활용 : 연령대별 단어 출력해보기
// let age = Number(prompt('나이를 입력해주세요.'));
function promptAge(age) {
  if (age >= 20) {
    return console.log('성인');
  } else if (age >= 17) {
    return console.log('고등학생');
  } else if (age >= 14) {
    return console.log('중학생');
  } else if (age >= 8) {
    return console.log('초등학생');
  } else if (age >= 0) {
    return console.log('유아');
  } else {
    return console.log('유효한 나이를 입력해주세요.');
  }
}
// promptAge(age);

//4-1. (개선) if문 개선
/**- 입력 유효성 검사 반복 (입력 받는 함수, 나이에 따른 분류 함수)
 * - 코드 가독성 향상
 */

// function inputAge() {
//   let age1 = Number(prompt('나이를 입력해주세요'));

//   //입력 유효성 검사 반복
//   while (isNaN(age1) || age1 < 0) {
//     age1 = Number(prompt('유효한 나이를 입력해주세요'));
//   }
//   return age;
// }

// function promptAge(age1) {
//   if (age >= 20) {
//     console.log('성인');
//   } else if (age >= 17) {
//     console.log('고등학생');
//   } else if (age >= 14) {
//     console.log('중학생');
//   } else if (age >= 8) {
//     console.log('초등학생');
//   } else {
//     console.log('유아');
//   }
// }

// let age1 = inputAge();
// promptAge(age1);

// 5. 삼항 연산자 : 오전 오후
let now = new Date().getHours();
now >= 0 && now < 12 ? console.log('오전') : console.log('오후');

//5-1. (개선)
console.log(now >= 12 ? '오후' : '오전');

//6. 1000까지의 숫자 중 13의 배수 && 홀수인 숫자 (+prompt)
let num = Number(prompt('1000까지의 숫자 중 13의 배수 && 홀수인 숫자 찾기'));
function findNumber(num) {
  console.log(num % 13 === 0 && num % 2 !== 0 ? 'success' : 'fail');
}
findNumber(num);

// 7. for 문을 이용해서 구구단 만들기

for (let i = 2; i < 10; i++) {
  console.log(`----${i}단----`);
  for (j = 1; j < 10; j++) {
    console.log(`${i}X${j}=${i * j}`);
  }
}

// 8. 0~100 중 2 또는 5의 배수 총합
let sum = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    // sum = sum + i;
    sum += i;
  }
}
console.log(sum);
