//1. 요일에 따라 다른 메시지를 출력
let now = new Date();
let day = now.getDay();
console.log(day); //요일 0(일)~6(토)

switch (day) {
  case 1:
    console.log('월요병 퇴치');
    break;
  case 3:
    console.log('이번주도 절반이나 왔다.');
  case 5:
    console.log('하하하하하하!!!! 금요일 소리질러!!');
  case 6:
    console.log('모두 즐거운 주말 보내세요');
  default:
    console.log('오늘을 즐겨요 😇');
}

// 2. 배열에서 특정 조건 값만 건너뛰기 (continue)
let names = ['영희', '철수', '민수', '수지'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === '철수') {
    continue; // "철수"일 경우 아래 코드를 건너뛰고 다음 반복으로 넘어감
  }
  console.log(names[i]);
}

//3. 구구단 2가지 방법으로 만들기
//3-1. for문
for (i = 2; i < 10; i++) {
  console.log(`---${i}단---`);
  for (j = 1; j < 10; j++) {
    console.log(`${i}X${j}=${i * j}`);
  }
}
//3-2. while문
// let n1 = 2;
// let n2 = 1;
// while (n1 < 10) {
//   console.log(`---${n1}단---`);
//   if (n2 < 10) {
//     console.log(`${n1}X${n2}=${n1 * n2}`);
//     continue;
//   }
//   break;
// }

// let n1 = 2;

// while (n1 < 10) {
//   console.log(`---${n1}단---`);
//   let n2 = 1; //n2의 각 단의 시작 때 1로 초기화

//   while (n2 < 10) {
//     console.log(`${n1}X${n2}=${n1 * n2}`);
//     n2++; //n2를 1씩 증가시켜 1~9까지 곱셈 진행
//   }
//   n1++; //다음 단으로 넘어가기 위해 n1 증가시킴
// }

//3-3. for문 구구단
