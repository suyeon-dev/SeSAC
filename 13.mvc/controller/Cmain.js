const Comment = require('../model/Comment');

// GET /
exports.main = (req, res) => {
  res.render('index');
};

// GET / comments
// - 함수이름 comments
exports.comments = (req, res) => {
  console.log(Comment.commentInfos());
  res.render('comments', { commentInfos: Comment.commentInfos() });
};

// GET / comment/:id
// - 함수이름 commnet
// - 가능하면 comments는 전역변수 아니라 지역변수로 선언
exports.comment = (req, res) => {
  const comments = Comment.commentInfos();
  console.log('req.params', req.params); //{ id: '1' }
  //   console.log('req.query', req.query);

  const commentId = req.params.id;
  console.log('commentId:', commentId); //1, 2, 3, 4
  console.log(comments[commentId - 1]); //댓글 실제 정보
  if (commentId < 1 || commentId > comments.length) {
    res.render('404');
  }
  if (isNaN(commentId)) {
    res.render('404');
  }
  res.render('comment', { commentInfo: comments[commentId - 1] });
};
