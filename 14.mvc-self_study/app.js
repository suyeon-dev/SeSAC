const express = require('express');
const app = express();
const router = express.Router();
const PORT = '8080';

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('static', express.static(__dirname + './static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우터 분리
const indexRouter = require('./routes'); //index는 생략 가능
app.use('/', indexRouter);

//404설정
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
