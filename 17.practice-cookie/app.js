const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8080;

const cookieConfig = {
  maxAge: 24 * 60 * 60 * 1000, //유효기간 24시간
  httpOnly: true, //브라우저 쿠키 차단
  signed: true,
};

app.set('view engine', 'ejs');

// TODO: 쿠키 미들웨어 설정
app.use(cookieParser('secret key'));

app.get('/', (req, res) => {
  // TODO: 쿠키값 가져오기 및 index.ejs에 보내기
  // res.render('index', {popup: 쿠키값});
  // cookie 접근
  // - 1) req.cookies 암호화되지 않은 쿠키
  // - 2) req.signedCookies: 암호화된 쿠키 확인 객체
  res.render('index', { popup: req.signedCookies.myCookie });
});

app.post('/set-cookie', (req, res) => {
  // TODO: 쿠키 생성
  /* (수업) res.cookie('popup', 'hide', {
    signed: true,
    maxAge: }); 
  */
  res.cookie('myCookie', 'cookie', cookieConfig);
  res.send('쿠키 생성 성공!!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
