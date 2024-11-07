/* 1. 태그 내부 내용 변경 */
/**
 * -inner Text
 * -textContent
 * -innerHTML
 */

let div1 = document.getElementById('div1');
div1.innerText = '     여기는 <b>첫번째</b> 태그입니다.&hearts;     /'; //entity 코드
//2칸 이상의 공백 문자 제거, 앞뒤로 공백문자 제거
console.log(div1.innerText); //개발자 도구 공백이 안 보임
div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다.&hearts;';
console.log(div1.innerHTML); //개발자 도구 공백 적용
div1.textContent = '     여기는 <b>첫번째</b> 태그입니다.&hearts;     /';
console.log(div1); //태그가 문자열로 읽힘
