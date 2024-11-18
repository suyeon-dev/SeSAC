const express = require('express');
const app = express();
const PORT = 8080;

// middleware 설정 추가
// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('/views', 'views');

// static 폴더 설정 추가
// - static 이라는 경로를 /public 대신에 사용할 예정
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (request, response) {
  /**
   * - request: 클라이언트가 서버에게 보내는 요청
   * - response: 서버가 클라이언트에게 보내는 응답
   */
  console.log(request);
  //   response.send('hello express!!!!');
  response.render('test', {
    isLogin: false,
    userInfo: {
      name: 'suyeon',
      msg: '오늘 너무 춥다!!!',
    },
  });

  response.render('test.ejs'); //middleware 설정 추가해야함
  //   response.render('test'); //가능
});

// (라우팅) get /login
app.get('/login', function (req, res) {
  res.render('login', {
    isLogin: false,
    userInfo: {
      name: 'suyeon',
      msg: '오늘 너무 춥다!!!',
    },
  }); //login이라는 ejs 파일을 보여줌
});

// (라우팅) get /register
app.get('/register', (req, res) => {
  res.render('register', {
    isLogin: true,
    userInfo: {
      name: 'suyeon',
      msg: '오늘 너무 춥다!!!',
    },
  });
});

//  404 처리 (위의 라우팅 외 주소 접속 시)
app.use(function (req, res) {
  res.render('404');
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
