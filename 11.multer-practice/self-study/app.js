const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = '8080';

// 미들웨어 설정
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/static', express.static('static'));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Multer 설정
const uploadSetting = multer({
  storage: multer.diskStorage({
    //저장한 공간 정보 : 하드디스크에 저장
    destination: function (req, file, done) {
      done(null, 'uploads/'); //uploads라는 폴더 안에 저장
    },
    filename: function (req, file, done) {
      const ext = path.extname(file.originalname); //파일의 확장자
      done(null, req.body.id + Date.now() + ext); //파일이름+날짜+확장자 이름으로 저장
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //5메가 용량 제한
});

// Get 요청
app.get('/', (req, res) => {
  console.log('res', res);
  //   res.send('응답!');
  res.render('index');
});

// 회원가입 요청
app.post('/register', uploadSetting.single('profileImg'), (req, res) => {
  console.log('-----------------');
  console.log('req.body', req.body);
  console.log('req.file', req.file);
  res.render('result', {
    id: req.body.name,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
    src: req.file.path,
  });
});

// PORT
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
