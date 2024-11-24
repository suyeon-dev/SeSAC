//서버 측 진입 파일
const express = require('express');
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// ejs views 설정
app.set('view engine', 'ejs');
app.set('views', './views');

//정적 파일 관리
// app.use('/static', express.static(__dirname + '/public'));

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 요청 -> 응답 */
app.get('/', (req, res) => {
  console.log('nodemon 실행');
  res.render('index');
});

// form GET 요청
app.get('/getForm', function (req, res) {
  console.log(req.query);
  //   res.send(`form data get 요청 성공!`);
  res.render('result', {
    userInfo: req.query,
    title: 'GET 요청',
  });
});

// form POST 요청
app.post('/postForm', (req, res) => {
  console.log(req.body);
  res.render('result', {
    userInfo: req.body,
    title: 'POST 요청',
  });
});

// form validation post 요청
app.post('/js-form-check', function (req, res) {
  console.log(req.body);
  res.send('js 유효성 검사');
});

// (todo) API 총 4개 작업
// - /practice1으로 들어갔을 때, practice1.ejs를 화면에 보여줘야 함
// - /practice2으로 들어갔을 때, practice2.ejs를 화면에 보여줘야 함
// - practice1, practice2.ejs에는 각각 get, post를 통한 폼 요청이 있고
// - 결과 페이지는 practice_result.ejs를 공통으로 사용

//1. /practice 1
app.get('/practice1', (req, res) => {
  console.log(req.query);
  res.render('practice/practice1');
});

// 2. /practice2
app.get('/practice2', (req, res) => {
  res.render('practice/practice2');
});

// 3. 주소 지정 form GET 요청
app.get('/getPractice', (req, res) => {
  res.render('practice/practice-result', {
    title: '과제1',
    userInfo: req.query,
    addInfo: false,
  });
});

//4. 주소 지정 form POST 요청
app.post('/postPractice', (req, res) => {
  console.log(req.body);
  res.render('practice/practice-result', {
    title: '과제2',
    userInfo: req.body,
    addInfo: true,
  });
});

//서버 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
