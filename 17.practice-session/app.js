const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 세션 설정, 10분 뒤 세션 종료하도록 설정
app.use(
  session({
    //connect.sid
    secret: 'secret Key',
    resave: false, //fasle 권장(성능 향상)
    saveUninitialized: false, //false 권장
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);

app.get('/', (req, res) => {
  // 로그인이 안 된 유저 -> {isLogin: false}
  // 로그인이 된 유저 -> {isLogin: true, user: 유저}
  console.log(req.session);
  console.log(req.session.user);

  if (req.session.user) {
    res.render('index', {
      user: req.session.user,
      isLogin: true,
    });
  } else {
    res.render('index', {
      isLogin: false,
    });
  }
});

app.get('/login', (req, res) => {
  res.render('login');
});

const userInfo = {
  userId: 'cocoa',
  userPw: '1234',
};

// POST /login
app.post('/login', (req, res) => {
  // 실제 로그인 진행 (세션 연결)
  // 세션의 user라는 키를 추가해서 userId값을 value로 전달
  console.log(req.body);
  const { id, pw } = req.body;

  if (id === userInfo.userId && pw === userInfo.userPw) {
    req.session.user = id; //세션에 저장
    res.redirect('/');
  } else {
    res.send('아이디 또는 비밀번호 오류입니다 🥹');
  }
});

// GET /logout
app.get('/logout', (req, res) => {
  // 실제 로그아웃 진행 (세션 삭제)
  console.log('logout:', req.session);
  // 비동기
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
