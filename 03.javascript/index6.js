//1. 문자열에서 사용하는 속성과 메소드
//length
//toUpperCase, toLowerCase, trim, indexOf, Slice
//replace, repalceAll, repeat, split

let str1 = 'Strawberry Moon';
let str2 = '   Strawberry Moon  ';

//- 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[11]);

//- Sonny 단어 만들기
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

//- length 속성
console.log(str1.length); //15
console.log(str2.length); //20(공백 포함)

/* 메소드 사용해보기 */
// - 매개변수 없는 함수: trim, toUpperCase, toLowerCase
// - 문자열.method()의 형태로 사용
console.log(str1);
console.log(str2);
console.log(str2.trim()); //매개변수가 없는 함수
console.log(str2.trim().length); //함수 chaining 가능

console.log(str1.toLowerCase()); //매개변수 없는 함수
console.log(str1.toUpperCase());

// - 매개변수(인자) 있는 함수: indexOf, charAt, slice
let fruit = 'applemango';
//--indexOf: 내가 찾고 싶은 문자열의 인덱스 번호 반환
console.log(fruit.indexOf('e'));
console.log(fruit.indexOf('a'));
console.log(fruit.indexOf('apple')); //맨 앞에 있는 문자(a) 찾아줌 -> 0
console.log(fruit.indexOf('mango')); //5
console.log(fruit.indexOf('z')); //없는 문자열을 찾으려고 하면 -1반환

console.log(fruit.charAt(0)); //a
console.log(fruit.charAt(8)); //g
console.log(fruit.charAt(10)); //''

console.log(fruit.slice(5)); //mango
console.log(fruit.slice(3, 6)); //lem
console.log(fruit.slice(-1)); //o
console.log(fruit.slice(-4)); //ango

console.log(fruit);

// -replace, replaceAll
let msg1 = 'Wow~ It is so amazing!!! Wow';
console.log(msg1.replace('Wow', 'Hey~~~'));
console.log(msg1.replaceAll('o', 'OO'));

let date = '2024.11.06';
//YYYY-MM-DD
date = date.replaceAll('.', '-');
console.log(date);

let hello = 'hello';
console.log(typeof hello);

let hello2 = hello.split();
console.log(hello2);

hello2 = hello.split('');
console.log(hello2); //length 5인 배열

hello2 = hello.split('e');
console.log(hello2); //['h', 'llo']
console.log(typeof hello2); // object(array, null, object)

//['2024', '11', '06]
//- date = "2024-11-06"
date = date.split('-');
console.log(date);

//---------------------배열---------------------
console.log('--------------array method--------------');
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quakka', 'rabbit', 'puppy', 'hamster'];

arr1[5] = 6;
arr1[8] = 8; //맨 끝 인덱스를 모를 수도 있으니까 이렇게 쓰지 말자
console.log(arr1);

arr1 = [1, 2, 3, 4, 5]; //초기화
arr1.push(6);
arr1.push(7);
arr1.push(8);
console.log(arr1);

console.log(arr1.pop()); //제거하는 값(8)을 반환 & 삭제
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

arr2.unshift('cat');
console.log(arr2);
console.log(arr2.shift()); //제거하는 값 반환 & 삭제
console.log(arr2);

//배열.inludes(요소) 배열에 요소가 있는 지 없는 지 확인
console.log(arr2.includes('cat'));
console.log(arr2.includes('quakka'));

arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);
console.log(arr1.indexOf(4)); //4가 몇번째 인덱스에 있는 지 -> 3번 인덱스

//reverse(), 순서 뒤집기
arr1.reverse();
console.log(arr1); //기존 배열의 변경

// join('') , 배열->문자열 병합 (<-> split)
//- join의 인자로 아무것도 전달이 되지 않으면
//- 배열 안의 컴마까지 같이 문자열로 반환⭐️

str1 = arr1.join();
console.log(str1); //5,4,3,2,1
str1 = arr1.join('');
console.log(str1); //54321 (빈 문자열 있음. 우리 눈으로 안 보일 뿐)

//for of, forEach
let arr3 = [1, 5, 3, 4, 5];
let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];

//- 기본 for문
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]); // 1 5 3 4 5 가 차례로 찍힘
}

//- for of 문
for (let el of arr3) {
  console.log(el); //1 5 3 4 5 가 차례로 찍힘
}

//- forEach(익명함수) : forEach(function(a[,b,c]))
// 요소, 인덱스, 배열 순서
arr3.forEach(function (num, i, arr) {
  console.log('요소', num);
  console.log('배열의 인덱스', i);
  console.log('arr3', arr);
  console.log('--------');
});

arr3.forEach((el) => {
  console.log(el);
});

// filter, map, find
// 매개변수로 들어가는 함수의 리턴값이 필수
console.log('------filter------');
arr2 = ['quakka', 'rabbit', 'puppy', 'hamster']; //재할당
// return 이후의 조건에 만족하는 요소를 찾아서
// 새로운 배열로 반환
let six = arr2.filter(function (el) {
  return el.length === 6;
});
console.log(six); //['quakka', 'rabbit']

console.log('------find------');
//- 조건을 만족하는 첫번째 요소 찾아서 반환
let six2 = arr2.find(function (word) {
  return word.length === 6;
});
console.log(six2); //quakka

console.log('------map------');
let arr4 = [1, 2, 3, 4, 5];
let multiArray = arr4.map(function (number) {
  return number * 3;
});
console.log(multiArray); //[3, 6, 9, 12, 15]

// - 화살표 함수 function 키워드, 중괄호, return 생략 가능
multiArray = arr4.map((number) => number * 3);
console.log(multiArray); //[3, 6, 9, 12, 15]

// object의 반복
const areaNum = {
  Seoul: '02',
  Incheon: '032',
  Daejeon: '042',
  Busan: '051',
  Ulsan: '052',
  Daegu: '053',
  Gwangju: '062',
  Jeju: '064',
};

// - let key in array
for (let area in areaNum) {
  console.log(area); // key-> 문자열로 반환 중
  //값에 접근? -> 대괄호 접근법으로만 사용 가능
  //   console.log(areaNum.area); //undefined
  console.log(areaNum['Jeju']);
}
