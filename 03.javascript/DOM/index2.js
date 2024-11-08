/* 1. 태그 내부 내용 변경 */
/**
 * -inner Text
 * -textContent
 * -innerHTML
 */

let div1 = document.getElementById('div1');
div1.innerText = '     여기는 <b>첫번째</b> 태그입니다.&hearts;     /';
// 2칸이상의 공백문자 제거, 앞뒤로 공백문자 제거
console.log(div1.innerText);

div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다.&hearts;';
console.log(div1.innerHTML);

div1.textContent = '     여기는 <b>첫번째</b> 태그입니다.&hearts;     /';
console.log(div1.textContent);

/* 2. 속성에 접근 */
/**
 * - 요소.속성명
 * - getAttribute(): 속성값 가져오기 (함수; 인자는 1개)
 * - setAttribute(): 속성값 설정하기
 */

//pooh, naver 아이디
let naver = document.getElementById('naver');
console.log(naver);
// naver.setAttribute('속성이름', '바꿔줄 속성값') -> 모두 문자열로 전달~!
naver.setAttribute('href', 'http://www.google.com');
console.log(naver.href); //http://www.google.com
console.log(naver.getAttribute('href')); //http://www.google.com

console.log(document.querySelector('#pooh').src);
//setAttribute뿐 아니라 `.속성값`으로도 변경 가능
document.querySelector('#pooh').alt = '푸사진';

/* 3. CSS 변경 */
//- h1, li*4개(배열) 가져오기
//-- getElementByID도 가능
let h1 = document.querySelector('h1');
let list = document.querySelectorAll('li');
console.log(h1, list);

//-li태그 배경색 분홍색, 글자색 흰색, 글씨크기 1.3rem -> CSS 속성
//--`style.속성` 또는 `classList.메서드` 이름
for (let el of list) {
  //   el.style.color = '#fff';
  //   el.style.backgroundColor = 'pink';
  //   el.style.fontSize = '1.3rem';
  el.classList.add('friends');
}

h1.classList.add('add-h1');

// h1.classList.remove('add-h1');
// h1.classList.toggle('add-h1'); //현재 상태의 반대로 만들어줌 (add+remove)

// 주로 조건문과 함께 쓰임
console.log(h1.classList.contains('add-h1')); //true
console.log(h1.classList.contains('add-h2')); //false
console.log(h1.classList); //선택된 요소의 적용된 클래스 목록 확인

/* 4. 부모, 자식, 형제 노드 찾기 */
// querySelector, getElementById
let friends = document.querySelector('#friends');
let tigger = document.querySelector('#tigger');
// console.log(friends);
// console.log(tigger);

console.log('--자식 노드 접근--');
//배열 형태로 가져옴
console.log(friends.children);
console.log(friends.children[0]);

console.log('--부모 노드 접근--');
// 배열 형태가 아닌 요소 자체를 가져옴
console.log(tigger.parentNode);

console.log('--형제 노드 접근');
// 배열 형태가 아닌 요소 자체를 가져옴
console.log('이전 형제', tigger.previousElementSibling);
console.log('다음 형제', tigger.nextElementSibling);

/* 5. 노드 생성, 추가, 삭제 */
let container = document.querySelector('.container');
// (1) 요소 생성
let p = document.createElement('p');
p.innerText = '새로 추가된 p';
p.style.fontWeight = '700';
p.style.background = 'red';
p.id = 'append-p';

// (2)요소 추가
console.log(p);

//-- 선택된 요소(container)의 맨 뒤 자식요소로 추가됨
container.append(p);

let p2 = document.createElement('p');
let p3 = document.createElement('p');
//-- 간단 실습 : 각 p2, p3에 글자 요소 추가, 클래스 (p-2, p-3) 추가
p2.innerText = 'p2 점심 뭐 먹지💭';
p3.textContent = 'p3 점심 뭐 먹지💭';
p2.classList.add('p-2');
p3.classList.add('p-3');
console.log(p2, p3);

// container.append(p2);
// container.append(p3);
// container.appendChild(p3);

container.append(p2, p3, '재밌다!'); //⭐️append 추천 >> appendChild

//prepend(): 선택된 요소의 맨 앞자식으로 추가
// friends = documnet.querySelector('#friends')
// 간단 실습 : li 태그 만들고, '캉가', friends 클래스 추가

let li = document.createElement('li');
li.textContent = '캉가';
li.classList.add('friends');
friends.prepend(li);

console.log(h1);

// before()
let h3 = document.createElement('h3'); //문자열 처리 안하면 변수 취급
h3.innerText = 'h3 tag';
h1.before(h3); //h1의 이전 형제로 추가

// after()
let h2 = document.createElement('h2');
h2.innerText = 'h2 tag';
h1.after(h2); //h1의 다음 형제로 추가

//-요소 삭제! -> remove(), removeChild()
let firstLi = document.querySelector('li');
// console.log(firstLi); //캉가
let ul = firstLi.parentElement;
// console.log(ul);

// firstLi.remove(); // 선택된 요소가 삭제됨
// 삭제할 요소.remove()

ul.removeChild(firstLi);
// 부모요소.removeChild(삭제할 자식 요소)

//간단실습 : container는 새로 선택해주세용
const parentDiv = document.querySelector('.container');
let div = document.createElement('div');

let img = document.createElement('img');
// img.src = './img/img.png';
img.setAttribute('src', './img/img.png');
img.alt = '이요르 사진';

let span = document.createElement('span');
span.innerText = '이요르';

div.append(img, span);
parentDiv.appendChild(div);
