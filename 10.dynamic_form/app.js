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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
