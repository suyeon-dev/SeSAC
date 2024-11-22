// 서버 측 진입파일
const express = require('express');
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. ejs views 미들웨어 설정
app.set('view engine', 'ejs'); // 템플릿 엔진 설정
app.set('views', './views'); // 뷰파일 폴더 경로 설정

// 2. 정적 파일 관리 (오늘은 안 쓰니까 주석 처리)
// app.use('/static', express.static(__dirname + '/public'));

//3. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //json 형식으로 데이터 주고 받겠다!

/* 요청 -> 응답 */
app.get('/', function (req, res) {
  console.log('nodemon 실행!!!');
  res.render('index');
});

//form get 요청
app.get('/getForm', function (req, res) {
  console.log(req.query);
  //   res.send('form data get 요청 성공!'); //클라이언트가 문자열 출력해서 보여줌
  // title "GET"
  res.render('result', {
    title: 'GET',
    userInfo: req.query,
  }); //result.ejs
});

//form post 요청
app.post('/postForm', function (req, res) {
  console.log(req.body);
  //   res.send('form data post 요청 성공!');
  res.render('result', {
    title: 'POST',
    userInfo: req.body,
  });
});

// form validation post 요청
app.post('/js-form-check', function (req, res) {
  console.log(req.body);
  res.send('js 유효성 검사');
});

/* 실습 문제 */
// /practice1으로 들어갔을 때, practice1.ejs를 화면에 보여줘야 함
// /practice2으로 들어갔을 때, practice2.ejs를 화면에 보여줘야 함
// practice1, practice2.ejs에는 각각 get, post를 통한 폼 요청이 있고
// 결과 페이지는 practice_result.ejs를 공통으로 사용

// 1. /pracitce1에 대한 GET 요청
app.get('/practice1', (req, res) => {
  res.render('practice/practice1');
});

// 2. /practice2에 대한 GET 요청
app.get('/practice2', (req, res) => {
  res.render('practice/practice2');
});

// 3. 주소 지정 form GET 요청
app.get('/getPractice', (req, res) => {
  // console.log(req.query);
  //   res.send('form data get 요청 성공!');
  res.render('practice/practice_result', {
    title: '실습문제1',
    userInfo: req.query,
    addInfo: false, //(!) practice1에서는 적은 정보를 주고 있음
  });
});

//4. 주소 지정 form POST 요청
app.post('/postPractice', (req, res) => {
  // console.log(req.body);
  // res.send('post 응답 완료);
  // (!) key 값 3번과 동일하게 userInfo로 맞춰줘야함
  res.render('practice/practice_result', {
    title: '실습문제2',
    userInfo: req.body,
    addInfo: true,
  });
});

// API 총 4개 작업

app.listen(PORT, function () {
  // 서버가 실행되면 동작하는 작업
  console.log(`http://localhost:${PORT}`);
});
