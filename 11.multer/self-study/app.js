const express = require('express');
const multer = require('multer');
const path = require('path'); //1-1 multer 세부 설정에서 사용
const app = express();
const PORT = 8080;

// (1) 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', './views');

// (2) body-parser 설정 (req.body)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// (3) static 폴더 설정
// - 클라이언트에서 읽어오기 위해 uploads 추가 설정 (5번 동적폼)
app.use('/static', express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', (req, res) => {
  res.render('index');
});

/* 1. multer : 파일 업로드 경로 설정 */
const upload = multer({
  dest: 'uploads/', //어디에 저장될지! '자동'으로 만들어지는 폴더
});

/* 1-1. multer : 세부 설정 방법 */
const uploadDetail = multer({
  storage: multer.diskStorage({
    // done: 어디에 저장될 지 경로 설정해주는 콜백함수
    destination: function (req, file, done) {
      done(null, 'uploads/'); // '수동'으로 uploads 폴더 만들어줘야 함
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일이름.확장자) -> return 확장자
      // req.file(originalname) === 인자 file
      const extension = path.extname(file.originalname); // .png .webp ....
      // done(null, 파일 이름 저장 형식) -> path 내장 모듈 가져오기
      // - path.basename(파일이름.확장자, 확장자) -> return 파일 이름
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );

      console.log('path.basename', path.basename(file.originalname, extension)); //파일이름만
      console.log('path.extname', path.extname(file.originalname)); //확장자만
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 }, // 5byte *1024 *1024 = 5MB
});

/* 2. multer - 하나의 파일 업로드 single() */
// - single의 매개변수: form의 name값
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  console.log('req.body', req.body); // 파일 정보 확인 불가 { title: '공부가 절 때렸어요' }
  console.log(req.file); //파일 정보는 req.file에서

  // {
  //   fieldname: 'userfile', //폼 내부에 정의한 name값
  //   originalname: 'IMG_7500.JPG', //원본 파일명 (로컬)
  //   encoding: '7bit', //파일 인코딩 타입
  //   mimetype: 'image/jpeg', //파일 타입
  //   destination: 'uploads/', //파일 저장 경로
  //   filename: 'dd4ab301b99e5f61ea00c066ad825425', //저장된 파일명
  //   path: 'uploads/dd4ab301b99e5f61ea00c066ad825425', //업로드된 파일 전체 경로
  //   size: 231087 //파일 크기(byte)
  // }

  res.send('응답!');
});

/* 3. multer - 하나의 Input에 여러 개의 파일 업로드 array() -> req.files 배열 형태*/
// array의 인자는 form < input의 name
app.post('/uploads/array', uploadDetail.array('multifiles'), (req, res) => {
  //   console.log(req.file); // undefined
  console.log(req.body); //파일 여러 개일 때는 files로 확인
  console.log(req.files); // 배열 형태
  /* 배열 형태 [{}, {}, ..]로 들어옴 
      {
        fieldname: 'multifiles',
        originalname: 'coffee+with.png',
        encoding: '7bit',
        mimetype: 'image/png',
        destination: 'uploads/',
        filename: 'coffee+with1732630279100.png',
        path: 'uploads/coffee+with1732630279100.png',
        size: 57525
        }
    */
  res.send('업로드 완료!!');
});

/* 4. multer - 여러 개의 Input에 파일 업로드: fields() ->req.files 객체형태 */
// - fields()의 매개변수는 배열 [{name: 'name값1'}, ...]
app.post(
  '/uploads/fields',
  uploadDetail.fields([
    { name: 'file1' },
    { name: 'file2' },
    { name: 'file3' },
  ]),
  (req, res) => {
    console.log(req.files); //객체 형태
    console.log(req.body); // {title1: '사진1', title2: '사진2', title3: '사진3'}
    /* 
    {file1: [{업로드 파일 정보}], file2: [{업로드 파일 정보}], ...}
    */
    res.send('업로드 완료!!');
  }
);

/* 5. 동적Form 파일 업로드 */
//- single 인자는 append에 써준 이름과 동일하게 (input 태그의 name이 아니라)
app.post('/dynamicUpload', uploadDetail.single('dynamicFile'), (req, res) => {
  console.log(req.file);
  /* {
    fieldname: 'dynamicFile',
    originalname: '2BD37DFE-583A-405D-A988-69DA3F975E1A.JPG',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'uploads/',
    filename: '2BD37DFE-583A-405D-A988-69DA3F975E1A1732634307836.JPG',
    path: 'uploads/2BD37DFE-583A-405D-A988-69DA3F975E1A1732634307836.JPG',
    size: 23791
    } */

  res.send(req.file); //클라이언트에 보내줘서 res.data에 담김
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
