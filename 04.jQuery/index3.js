console.log(window);
console.log(document);

console.log($(window));
console.log($(document));

// click(): 클릭했을 때
//- jQuery에서는 이벤트 이름으로 메서드가 존재함
//- 요소.click(function(){}), 요소.hover(function(){}, function(){})
$('.p-msg').click(function () {
  $('.p-msg').css('color', 'red');
});

// $('.num').click(function () {
//   //   $('.num').css('color', 'blue');
//   $(this).css('color', 'green'); //자기 자신을 가리킴
// });

// $('.num').on('click', function () {
//   $(this).css('color', 'pink');
// });

//in JS (19~21 라인까지의 동작과 동일)
let nums = document.querySelectorAll('.num');
for (let i = 0; i < nums.length; i++) {
  // 각 num 요소에 클릭 이벤트 리스너 추가
  nums[i].addEventListener('click', function () {
    // 클릭된 요소의 텍스트 색상을 파란색으로 변경
    this.style.color = 'blue';
  });
}

//hover(): 마우스를 올렸을 때, 마우스를 떼었을 때 정의
$('.div-hover').hover(
  function () {
    $(this).addClass('hover');
  },
  function () {
    $(this).removeClass('hover');
  }
);

$(window).scroll(function () {
  console.log('scrolling...');
});

/**
 * input.addEventListener('keydown', function (event) {
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
 */

//input-key 키보드 이벤트
$('.input-key').keydown(function (e) {
  if (e.code)
    if (e.code === 'ArrowLeft') {
      console.log('왼쪽 방향키 눌렸습니다.');
    } else if (e.code === 'ArrowRight') {
      console.log('오른쪽 방향키 눌렸습니다.');
    } else if (e.code === 'ArrowUp') {
      console.log('위쪽 방향키 눌렸습니다.');
    } else if (e.code === 'ArrowDown') {
      console.log('아래쪽 방향키 눌렸습니다.');
    } else {
      console.log('방향키가 아닌 키 누르는 중...');
    }
});

//submit
$('#todo-form').submit(function (e) {
  //기본 동작 막기(새로 고침 방지)
  e.preventDefault();
  //Input 태그에 작성한 글자 가져오기
  const inputValue = $('input[name="todo"]').val();
  //li태그 만듦과 동시에 form 아래의 ul 태그에 붙여넣기
  $('.todos').append(`<li>${inputValue}</li>`);
  //input 초기화
  $('input[name="todo"]').val('');
});
