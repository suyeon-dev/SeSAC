console.log(document);
console.log(document.URL);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.title);

//1~4번보다 5번 진짜 많이 사용

/* 1. getElementById */
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

/* 2. getElementsByClassName*/
console.log(document.getElementsByClassName('pink')); //배열형태(배열은 아님!)
console.log(document.getElementsByClassName('pink')[0]);
// console.log(document.getElementsByClassName('pink')[0]);
console.log(document.getElementsByClassName('others'));
console.log(document.getElementsByClassName('others')[0]);

/* 3. getElementsByTagName */
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('div')[0]);

/* 4. getElementByName(name 속성값) */
console.log(document.getElementsByName('id')); //NodeList(2) [input, input]

/* 5. querySelector('CSS선택자')*/
// 반환값: 태그
console.log('----');
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others')); //2개 중 위에 있는 #green 하나 가져옴
console.log(document.querySelector('#green'));
console.log(document.querySelector('#red'));
console.log(document.querySelector('div'));
console.log(document.querySelector('input'));
console.log(document.querySelector("[name='id']")); //속성 선택자도 가능

/* 6. querySlectorAll*/
// 반환값: 배열 형태의 노드리스트
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('#red'));

console.log('----간단 실습');
// 간단 실습
//for of 사용해서 pink 클래스 모두 출력하기
let pinks = document.querySelectorAll('.pink');
// console.log(pinks);
for (let tag of pinks) {
  console.log(tag);
}
