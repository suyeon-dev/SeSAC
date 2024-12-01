const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 임시 DB: id, userid, date, comment */
const comments = [
  { id: 1, userid: 'bebe', date: '2024-12-01', comment: '공부가 절 때렸어요' },
  { id: 2, userid: 'santa', date: '2024-11-30', comment: '호호호호' },
  { id: 3, userid: 'rudolph', date: '2024-12-02', comment: '징글벨 징글벨' },
  { id: 4, userid: 'johnDoe', date: '2024-12-24', comment: '울면 안 돼' },
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req, res) => {
  //   console.log(comments);
  //   res.send('응답');
  res.render('comments', {
    commentInfo: comments,
  });
});

// (!) get요청: req.query 또는 req.params로 받을 수 있음
app.get('/comment/:id', (req, res) => {
  //   res.send('응답');
  console.log('req.params', req.params); //{id: '1'}
  const commentId = req.params.id;
  console.log('댓글 정보:', comments[commentId - 1]);
  if (commentId < 1 || commentId > comments.length) {
    res.render('404');
  }
  if (isNaN(commentId)) {
    res.render('404');
  }

  res.render('comment', { commentInfo: comments[commentId - 1] });
});

// [404 error]
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
