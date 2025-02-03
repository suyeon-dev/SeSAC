// npm i aws-sdk
// npm i multer-s3@2.10.0

const express = require('express');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');

const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const app = express();
const PORT = 8080;
dotenv.config();

// view engine 설정
app.set('view engine', 'ejs');

// aws s3 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3(); //위에서 만든 aws 객체의 S3 클래스

// multer 설정 [1]
// 서버에 사진을 저장하는 기존 코드
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); //S3가 아닌 서버에 직접 저장하는 방식
//   },
//   filename: (req, file, cb) => {
//     // 확장자 분리 path 모듈
//     const ext = path.extname(file.originalname); // 확장자
//     cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
//   },
// });

// Multer 설정 [2]
// s3에 사진을 저장하는 코드
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: 'public-read', // 파일 접근 권한 설정

    key: (req, file, cb) => {
      // path 없이 써보기
      cb(null, Date.now().toString() + '-' + file.originalname);
    },
  }),
});

app.get('/', (req, res) => {
  res.render('index', { imageUrl: '' });
});

// index.ejs의 인풋의 name 값을 인자로
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  //   {
  //     fieldname: 'image',
  //     originalname: 'bebe-study.JPG',
  //     encoding: '7bit',
  //     mimetype: 'image/jpeg',
  //     size: 231087,
  //     bucket: 'suyeon-bucket',
  //     key: '1738561136933-bebe-study.JPG',
  //     acl: 'public-read',
  //     contentType: 'application/octet-stream',
  //     contentDisposition: null,
  //     contentEncoding: null,
  //     storageClass: 'STANDARD',
  //     serverSideEncryption: null,
  //     metadata: null,
  //     location: 'https://suyeon-bucket.s3.ap-northeast-2.amazonaws.com/1738561136933-bebe-study.JPG', //✅
  //     etag: '"12b817338bda76f36d77f9d2b2d66bda"',
  //     versionId: undefined
  //   }

  if (req.file) {
    const imageUrl = req.file.location; // S3에 업로드된 파일의 경로
    res.render('index', { imageUrl });
  } else {
    res.send('이미지를 주세요...');
  }

  res.send('이미지 잘 받았다!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
