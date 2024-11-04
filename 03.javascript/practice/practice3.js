//조건문

function promptAge() {
  let age = prompt('나이를 입력해주세요');

  if (age >= 20) {
    console.log('성인');
  } else if (age >= 17) {
    console.log('고등학생');
  } else if (age >= 14) {
    console.log('중학생');
  } else if (age >= 8) {
    console.log('초등학생');
  } else if (age >= 0) {
    console.log('유아');
  } else {
    console.log('유효한 나이를 입력해주세요.');
  }
}

// promptAge();

// 삼항연산자
let now = new Date().getHours();
now >= 0 && now < 12 ? console.log('오전') : console.log('오후');

//숫자 찾기
function promptNum() {
  let num = prompt('13의 배수면서 홀수인 숫자 찾기. 숫자를 입력하세요');
  //13의 배수 && 홀수
  num % 13 === 0 && num % 2 !== 0 ? alert('success') : alert('fail');
}
// promptNum();

//0~100의 숫자 중에서 2또는 5의 배수 총합 구하기
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);

//for문을 이용해서 구구단 만들기
for (let i = 2; i < 10; i++) {
  console.log(`---${i}단---`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
