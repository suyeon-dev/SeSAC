const express = require('express');
const app = express();

// console.log(process.env);
const dotenv = require('dotenv');
dotenv.config(); //config위에서는 env정보를 읽을 수 없음
const PORT = process.env.PORT;

console.log('PORT number', PORT);
console.log('db pw', process.env.DB_PASSWORD);
console.log('db name', process.env.DB_DATABASE); //대문자, 스네이크케이스

app.get('/', (req, res) => {
  res.send('get 요청입니다.');
});

app.post('/test', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localholst:${PORT}`);
});
