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
    res.redirect('/'); //get 요청 보냄
  } else {
    res.send('아이디 또는 비밀번호 오류입니다 🥹');
    /* 수업 (document 객체 자체가 프론트에서만 접근 가능한 것)
    res.send(`
      <script>
        alert('아이디 또는 비밀번호가 틀렸어요. 다시 시도하세요.')
        document.location.href='/login';
      </script>
    `)
    */
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

/* 수업 GET /logout
  app.get('/logout', (req, res)=>{
    const user = req.session.user;
    if(user){
      //로그인된 유저라면 로그아웃 시켜주기
      req.session.destroy((err)=>{
        if(err)throw err;
        res.redirect('/'); //로그아웃 종료 후 home으로
        })
    } else{
    //로그인 안된 유저(세션 만료된 유저, 10분 후..)
        res.sned(`
          <script>
            alert('이미 세션이 만료되었어요');
            document.location.href="/";
          </script>
        `)
    }
    
  })
  */

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
