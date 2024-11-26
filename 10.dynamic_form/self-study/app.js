// 서버 측 진입 파일
const express = require('express'); //외부 모듈(express) 가져오기
const app = express(); //express 객체 생성 -> 서버 설정, 라우팅, 미들웨어 연결 등 담당
const PORT = 8080;

//1. 뷰 폴더 설정
app.set('view engine', 'ejs');
app.set('views', './views');

//2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //해석할 모듈 설정

/* 전역 변수 */
// input pw는 문자열
const realId = 'banana';
const realPw = '4321';

/* API */
app.get('/', (req, res) => {
  res.render('index.ejs');
});

//ajax GET
app.get('/ajax', (req, res) => {
  // console.log(req.query);
  //   res.send('응답!'); // [index.js]의 ajax success console.log()에서 받아줌
  res.send(req.query);
});

//ajax POST
app.post('/ajax', (req, res) => {
  // console.log(req.body);
  res.send(req.body);
});

/* Axios 요청*/
// /axios GET
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// /axios POST
app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/* Fetch 요청 */
app.get('/fetch', (req, res) => {
  console.log('fetchGet', req.query);
  res.send(req.query);
  // res.send('응답완료!'); //클라이언트 측에서 return res.text() 사용
});

app.post('/fetch', (req, res) => {
  console.log('fetchPost', req.body); //클라이언트가 보낸 데이터 출력
  res.send(req.body); //클라이언트로 데이터를 그대로 응답
});

// 외부 API 사용하기
app.get('/api', (req, res) => {
  res.render('api');
});

// 실습문제
app.get('/practice1', (req, res) => {
  res.render('practice/practice1');
});

app.get('/practice2', (req, res) => {
  res.render('practice/practice2');
});

// 실습1 - axios GET
app.get('/axios-practice1', (req, res) => {
  console.log('req.query', req.query);
  res.send(req.query);
});
// 실습2 - POST
// - const realId = "banana";
// - const realPw = "4321";
app.post('/axios-practice2', (req, res) => {
  console.log('req.body', req.body);
  const { userId, userPw } = req.body;

  if (realId === userId && realPw === userPw) {
    res.send({ isSuccess: true, userId: userId });
  } else {
    res.send({ isSuccess: false });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
