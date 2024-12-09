const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

// ver1. 암호화 되지 않은 쿠키
// app.use(cookieParser()); //단순히 쿠키를 읽거나 설정할 때 사용

// ver2. 암호화된 쿠키
app.use(cookieParser('secret Key')); //암호화/복화하 시 사용할 키 지정
// 보안적인 이유로 실제 프로젝트에서는 비밀기 '.env'파일로 관리
// 문자열은 아무거나 상관없음

// cookie 설정 객체
const cookieConfig = {
  // maxAge: 쿠키의 수명, 1000이 1초인 밀리초 단위 ex) 1000*60*5 = 5분 쿠키
  // expires: 만료 날짜 GMT시간 설정 ex) new Date(2024,11,9)
  // httpOnly: 프론트에서 document.cookie로 접속하는 것을 차단, http 통신으로만 접근 가능 (true/false)
  // path: '/', '/abc' 원하는 경로에서 쿠키 설정 가능 (쿠키가 전송될 URL 특정)
  // secure: 웹 브라우저와 웹 서버가 https로 통신할 경우에만 쿠키 전송 (true/false)
  // signed: 쿠키 암호화 여부 (true/false)
  maxAge: 10 * 60 * 1000, //수명 1분
  httpOnly: true, //브라우저에서 쿠키 접근(document.cookie) 막기
  //   signed: false, //ver1
  signed: true, //ver2 암호화된 쿠키
};

const cookieConfig2 = {
  maxAge: 10 * 60 * 1000,
  httpOnly: true,
  path: '/abc',
};

app.get('/', (req, res) => {
  res.render('cookie');
});

// 1. 쿠키 설정
app.get('/setCookie', (req, res) => {
  // res.cookie(쿠키이름, 쿠키값, 쿠키옵션)
  res.cookie('myCookie', 'cookie🍪', cookieConfig);
  // 암호화된 쿠키/암호화되지 않은 쿠키 모두 res.cookie()로 쿠키 설정
  res.send('set cookie 완료, 응답 종료!');
});

// 2. 쿠키값 가져오기
// 상위 경로(/)에서 만든 쿠키는 하위 경로(/abc)에서 볼 수 있다. 그 반대의 경우는 보이지 않음
// 쿠키는 보통 (/)에서 쓰고, 특정 페이지에서 일어나는 일이 아니기 때문에 Path 지정이 흔하지는 않음
app.get('/abc', (req, res) => {
  res.cookie('abc-page', 'abc page cookie', cookieConfig2); //경로 제한 쿠키 설정
  res.render('cookie-another');
});

app.get('/getCookie', (req, res) => {
  // 쿠키값 확인
  console.log('암호화되지 않은 쿠키:', req.cookies); //{쿠키: 쿠키값, ...} { user: 'sesac', myCookie: 'cookie~~' }
  console.log('암호화된 쿠키:', req.signedCookies);
  //   res.send(req.cookies); //ver1. 암호화되지 않은 쿠키
  res.send(req.signedCookies); //ver2. 암호화된 쿠키
});

// 3. 쿠키 삭제
app.get('/clearCookie', (req, res) => {
  res.clearCookie('myCookie', 'cookie🍪', cookieConfig);
  res.send('clear cookie, 응답 종료!');
});

/*
ver1. 암호화하지 않앗을 때
- 미들웨어: app.use(cookieParser())
- 쿠키 설정: res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션 객체)
- 쿠키 확인: req.cookies 객체에서 확인
- 쿠키 삭제: res.clearCookie(쿠키 이름, 쿠키 값, 쿠키 옵션 객체)
    -- clearCookie(), cookie()는 응답 완료를 하지 않음
        이후에 render, send, redirect, end... 등으로 응답 완료 작업 해야 함
    -- 삭제할 때는 이름, 값, 옵션이 일치해야 삭제 가능!  

ver2. 암호화했을 때
- 미들웨어: app.use(cookieParser('비밀키(임의의 문자열)'))
- 쿠키 설정: ver1.과 동일
    -- 쿠키 옵션 객체의 signed 값이 true
- 쿠키 확인: req.signedCookies 객체에서 확인
- 쿠키 삭제: ver1.과 동일
*/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
