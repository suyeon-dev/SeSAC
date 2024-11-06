// 1. Date 객체
let now = new Date();
console.log(now); //자주 사용
console.log(new Date('September 30, 1990 13:00:00')); //문자열 설정 가능

// 기준일 1970.01.01 00:00:00 초 이후로 몇 초나 지났는 지!
console.log(new Date(60000000));
console.log(new Date(0));
console.log(new Date(2010, 2, 2)); //자주 사용
console.log(new Date(2010, 2, 2, 18, 35, 50)); //Tue Mar 02 2010 18:35:50 GMT+0900 (한국 표준시)

console.log(now.getFullYear(), '년');
console.log(now.getMonth(), '월'); // (0~11) 1월은 0으로, 12월은 11로 출력됨
console.log(now.getDate(), '일'); // 1~
console.log(now.getHours(), '시'); //0~23
console.log(now.getMinutes(), '분'); //0~59
console.log(now.getSeconds(), '초'); //0~59
console.log(now.getMilliseconds(), '밀리초'); //0~999
console.log(now.getDay(), '요일'); //0(일)~6(토)

//퀴즈
//조건문을 사용해서 오늘이 주말인지 평일인지 출력
//if, switch, 삼항연산자 모두 가능
let today = new Date();

//- if
if (today.getDay() >= 1 && today.getDay() <= 5) {
  console.log('평일');
} else {
  console.log('주말');
}

//- 삼항연산자
today.getDay() >= 1 && today.getDay() <= 5
  ? console.log('평일')
  : console.log('주말');

//- 삼항연산자(쌤)
const checkDay = now.getDay() === 0 || now.getDay() === 6 ? '주말' : '평일';
console.log(checkDay);

//2. Math 객체
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2); //루트2 값

console.log(Math.min(50, 10, 1, 2, 3, 4, 0, -5));
console.log(Math.max(50, 10, 1, 2, 3, 4, 0, -5));
console.log(Math.random()); //인자 없음. 0<= x <1 범위에서 랜덤 출력
console.log(Math.round(5.3)); //5 소수->정수 반올림
console.log(Math.floor(5.3)); // 소수->정수 버림
console.log(Math.ceil(5.3)); //소수->정수 올림

// Math.random 응용!
//문1. 0~9 소수가 아닌 난수
//0<= x <1
console.log('난수1:', Math.floor(Math.random() * 10));

//문2. 0~10 자연수 난수
//0<= x <=9
//ceil도 가능
console.log('난수2:', Math.floor(Math.random() * 10) + 1);

//문3. 20~22까지의 난수
//0<= x <1
//0<= x <3
//20<= x <23
console.log('난수3:', Math.floor(Math.random() * 3)); //0~2 난수, 0<= x <3
console.log('난수3:', Math.floor(Math.random() * 3) + 20); //초기값 20, 20<= x <23

//
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

//object의 key만 가져와서 배열로 반환
let key = Object.keys(areaNum);

//object의 value만 가져와서 배열로 반환
let value = Object.values(areaNum);

console.log(key); //['Seoul', 'Incheon', 'Daejeon', 'Busan', 'Ulsan', 'Daegu', 'Gwangju', 'Jeju']
console.log(value); //['02', '032', '042', '051', '052', '053', '062', '064']
