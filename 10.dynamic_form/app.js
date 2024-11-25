const express = require('express');
const app = express();
const PORT = 8080;
/* 미들웨어 설정*/
// 1. 뷰 폴더 설정
app.set('view engine', 'ejs');
app.set('views', './views');

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // 해석할 모듈 설정

/* 전역 변수 */
// input pw는 문자열
const realId = 'banana';
const realPw = '4321';

/* API */
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// /ajax GET
app.get('/ajax', (req, res) => {
  console.log(req.query);
  //   res.send('응답!'); // [index.js]의 ajax success console.log()에서 받아줌
  res.send(req.query);
});

// /ajax POST
app.post('/ajax', (req, res) => {
  //body-parser 설정을 해야 req.body를 읽을 수 있음
  console.log(req.body);
  res.send(req.body);
});

/* axios 요청 */
// /axios GET
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
  /*
    {name: 'suyeon', gender:'여성'}
  */
});

// /axios POST
app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send('응답완료');
});

/* fetch 요청 */
app.get('/fetch', (req, res) => {
  console.log(req.query);
  //  res.send('응답완료!!'); //클라이언트에서 .text() 사용
  // 클라이언트에서 .json() 사용
  res.send(req.query); // 객체를 보낸다.
});

app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body); //{ name: '', gender: '' }
});

// 외부 API 사용하기
app.get('/api', (req, res) => {
  res.render('api');
});

/* 실습문제 */

app.get('/practice1', (req, res) => {
  res.render('practice/practice1.ejs');
});
app.get('/practice2', (req, res) => {
  res.render('practice/practice2.ejs');
});

// /axios-practice1 GET
app.get('/axios-practice1', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// practice2 POST
// - const realId = "banana";
// - const realPw = "4321";
app.post('/practice2', (req, res) => {
  console.log(req.body); //터미널 { userId: 'santa', userPw: '1234' }
  // const { userId, userPw } = req.body; //객체 구조분해 할당
  if (realId === req.body.userId && realPw === req.body.userPw) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
  // res.send('응답완료'); // 위에 있는 realId, pw랑 비교해봐야 해서 req.body로 안 받고 문자열로 -> 유효성 검사 후 주석처리(안하면 에러남 ^^...)
});

// 포트 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
