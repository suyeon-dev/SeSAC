const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8080;

//1. 뷰 폴더 설정
app.set('view engine', 'ejs');
app.set('views', './views');

//2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//3. static 폴더 설정
app.use('/static', express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

//4. multer 설정
const upload = multer({
  dest: 'uploads/', //어디에 저장될지!
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, 'uploads/'); //어디에 저장될 지 경로 설정!
      // uploads라는 폴더가 미리 만들어져 있어야 함
    },
    filename: function (req, file, done) {
      //path 불러오고 나서 const extension = path.extname(파일이름.확장자) >> 확장자만 리턴
      const extension = path.extname(file.originalname); // .png .webp , ...

      //  path.basename(파일이름.확장자, 확장자) -> 파일 이름만 리턴 '26139_img'
      // done(null, 우리가 설정할 파일 이름)
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );

      console.log('path.basename', path.basename(file.originalname, extension));
      console.log('path.extname', path.extname(file.originalname));
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 }, //5MB
});

app.get('/', (req, res) => {
  res.render('index');
});

//multer - 하나의 파일 업로드 single()
//-  single의 매개변수: form의 name값
app.post('/upload', upload.single('userfile'), (req, res) => {
  console.log(req.body); //req.body: title 데이터 정보 확인 가능 // 파일 정보는 req.file에서 확인
  console.log(req.file); //req.file: 파일 업로드 성공 결과 (파일 정보)

  /* 
{
  fieldname: 'userfile', // 폼 내부에 정의한 name 값
  originalname: '26139_img.png', // 원본 파일명
  encoding: '7bit', // 파일 인코딩 타입
  mimetype: 'image/png', // 파일타입
  destination: 'uploads/', // 파일 저장경로
  filename: '8e42f8a0c4d8d43663e93cc832b4590a', // 저장된 파일명
  // 업로드된 파일 전체 경로
  path: 'uploads\\8e42f8a0c4d8d43663e93cc832b4590a', 
  size: 469955 // 파일 크기 (byte)
}
*/

  res.send('응답!');
});

// 하나의 input에 여러개의 파일
// .array()
app.post('/uploads/array', uploadDetail.array('multifiles'), (req, res) => {
  // console.log(req.file);// undefined
  console.log(req.files); //파일 여러개일 때는 files로 확인!
  /*
{
    fieldname: 'multifiles',
    originalname: 'css.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'css1732518413910.png',
    path: 'uploads/css1732518413910.png',
    size: 36147
  }
*/

  console.log(req.body);
  res.send('업로드 완료!!');
});

// 여러개의 input에 파일 업로드
// .fields() 사용
// fields의 매개변수는 배열[{name:'name값1'}, ...]
app.post(
  '/uploads/fields',
  uploadDetail.fields([
    { name: 'file1' },
    { name: 'file2' },
    { name: 'file3' },
  ]),
  (req, res) => {
    // upload.fields()로 받아주는 req.files 객체 형태로 들어옴
    console.log(req.files);
    console.log(req.body);
    /*
        {filename1: [{업로드 파일 정보}], filename2: [{업로드 파일 정보}], ...}
    */

    res.send('업로드 완료');
  }
);

//동적폼 파일 업로드
//single 인자는 append에 써준 이름과 동일하게
app.post('/dynamicUpload', uploadDetail.single('dynamicFile'), (req, res) => {
  console.log(req.file);
  /*
    {
    fieldname: 'dynamicFile',
    originalname: 'TIL.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'TIL1732520706462.png',
    path: 'uploads/TIL1732520706462.png',
    size: 26178
    }
    */
  res.send(req.file);
});

// 포트 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
