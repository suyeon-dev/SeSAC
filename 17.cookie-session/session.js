const express = require('express');
const session = require('express-session'); //세션관리용 미들웨어
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

// session 미들웨어 등록
app.use(
  session({
    secret: 'secret Key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000, // 10분짜리 세션 쿠키
    },
  })
);
/* session({
    secret: 세션 암호화를 위한 서명값(필수; 나중에 env로 관리) >> string
    resave: 세션에 수정사항이 생기지 않더라도 매 요청마다 세션을 다시 저장할지 여부 >> boolean (false 권장; 성능 향상)
    saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 >> boolean (false 권장)
    cookie:{} 세션 쿠키에 대한 설정 (cookie.js 의 config 참고)
    secure: true일 때는 https에서만 세션을 주고 받는다.
    name: 세션 쿠키의 이름(sessionID값 저장하는 쿠키 이름, default: connect.sid)
  }), */
app.get('/', (req, res) => {
  res.render('session');
});

// 1. 세션 설정
app.get('/set', (req, res) => {
  // req.session.키이름=value
  req.session.name = 'suyeon';
  res.send('session 설정 완료');
});

// 2. 세션 확인(가져오기)
app.get('/get', (req, res) => {
  console.log(req.session);
  console.log(req.sessionID);
  res.send({ id: req.sessionID, name: req.session.name });
});

// 3. 세션 삭제
app.get('/destroy', (req, res) => {
  console.log(req.session);
  // 비동기
  req.session.destroy((err) => {
    if (err) throw err;

    res.send('session 삭제 완료');
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
