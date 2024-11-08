/**
 * 동작의 종류: click, dbClick, scroll, change, submit, ...
 * - addEventListenr(동작의 종류, function(){})
 * - <태그 onChange='함수의 이름()', onClick='함수의이름()'></태그>
 *   on[동작의 종류] 속성으로 이벤트 제어 가능
 */

const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');

// **btn1.addEventListener('동작의이름', function(){동작})
btn1.addEventListener('click', function () {
  console.log('버튼1이 클릭되었습니다!!');
  alert('버튼1을 클릭하셨군요!');
});

//-hover의 반정도만(올릴때만 실행, 이전 상태로 돌아오지 않음) 실행됨
btn1.addEventListener('mouseover', function () {
  //this는 자기 자신을 가리킴
  //   btn1.style.backgroundColor = 'aqua';
  this.style.backgroundColor = 'aqua';
});

//**btn2를 눌렀을 때, div를 자식으로 붙이기
const container = document.getElementById('container');
btn2.addEventListener('click', () => {
  let div = document.createElement('div');
  div.innerText = 'hi!';
  div.style.backgroundColor = 'pink';

  container.append(div);
});

// **btn3
//만들어진 div의 배경색 변경
//함수 호출 시 괄호 필수적으로 생략
// - 이벤트가 일어났을 때만 적용되려면 chageColor() 이렇게 쓰면 안됨 -> 즉시 호출됨
btn3.addEventListener('click', changeColor);
// btn3.addEventListener('click', changeColor); //재사용 용이

function changeColor() {
  const divs = document.querySelectorAll('#container div');
  // [div, div, div, ...]
  for (let div of divs) {
    div.style.backgroundColor = 'skyblue';
  }
  //막내 요소만 노랑색으로 변경 (나중에 만들어보세요~!)
  //   div[divs.length - 1].style = 'yellow';
}

// **btn4
// 클릭 시 배경색 노랑으로 변경, 글자색 검정색으로 변경
btn4.addEventListener('click', changeBtnColor);
function changeBtnColor() {
  this.style.backgroundColor = 'yellow';
  this.sytle.color = '#000';
}

// **btn5
// 클릭 시 alert 창 띄우기 (html onClick)
function sayHi() {
  alert('안녕하세요! 버튼5입니다!!');
}

// ------------------------------------------------
const btn = document.querySelector('button');
const input = document.querySelector('input');

/* 1. [클릭 이벤트] */
// 이벤트 종류가 아니라 이벤트 객체(이벤트에 대한 정보들)에 대해 알아보기
btn.addEventListener('click', function (event) {
  //클릭 이벤트에 관한 정보(event 객체)
  console.log(event);

  // 어떤 요소가 클릭되었는지 확인 가능
  console.log(event.target);
});

// ------------------------------------------------
/* 2. [키보드 이벤트] */
input.addEventListener('keydown', function (event) {
  //console.log(event);

  //방향키 아래, 위, 왼쪽, 오른쪽
  //-.code랑 .key랑 거의 비슷
  console.log(event.code);
  console.log(event.key);
  //   console.log(event.keycode);
  // if(event.code)
  if (event.code === 'ArrowLeft') {
    console.log('왼쪽 방향키 눌렸습니다.');
  } else if (event.code === 'ArrowRight') {
    console.log('오른쪽 방향키 눌렸습니다.');
  } else if (event.code === 'ArrowUp') {
    console.log('위쪽 방향키 눌렸습니다.');
  } else if (event.code === 'ArrowDown') {
    console.log('아래쪽 방향키 눌렸습니다.');
  } else {
    console.log('방향키가 아닌 키 누르는 중...');
  }
});

// ------------------------------------------------
/* 3. [스크롤 이벤트] */
// window객체: 브라우저 창 자체
// console.log(window);

window.addEventListener('scroll', (event) => {
  //   console.log(event);
  //   console.log(event.target);//스크롤 되는 대상
  //   console.log(scrollY);

  //scrollY가 800에서 div opacity가 1이 되도록
  if (scrollY > 800) {
    document.querySelector('.pos').style.opacity = '1';
  }
});

// ------------------------------------------------
// 폼이벤트
/* 4. [Submit] */
const todoForm = document.querySelector('#todo-form'); //form태그
const todos = document.querySelector('.todos'); //ul태그

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  //브라우저 기본 동작 막기 : 폼이 제출되는 것을 취소! 이벤트 전달을 막는 방법
  //새로고침 막음

  console.log('submit');

  //폼 내부의 input창 선택
  const todoInput = document.querySelector('input[name="todo"]');
  //   console.log(todoInput);
  console.dir(todoInput); //요소가 가지고 있는 데이터를 출력
  //   console.log(todoInput.value); //input창 안에 입력한 내용 (숫자써도 문자열 타입으로 가져옴)

  //(!!!) 공백으로 들어오는 문자는 추가되지 않도록
  const todo = todoInput.value.trim();

  console.log('todo:' + todo); //''

  if (todo !== '') {
    //''일 때 막아주기!
    //선택된 ul태그의 자식으로 <li>todo</li> 붙이기
    const li = document.createElement('li');
    li.textContent = todo;
    todos.append(li);
  } else {
    alert('오늘의 할 일을 입력해주세요');
  }

  todoInput.value = '';
});

// ------------------------------------------------
// 폼이벤트
/* 4. [change 이벤트] */
const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change', function () {
  //input창 포커싱 된 상태에서 브라우저 창의 다른 곳을 클릭한 경우
  console.log('changed!');
});

chgInput.addEventListener('input', function () {
  //input창의 value에 변경이 발생되면 일어나는 이벤트
  console.log('changing!');

  let intro = document.querySelector('.intro');
  intro.innerHTML = this.value;
});
