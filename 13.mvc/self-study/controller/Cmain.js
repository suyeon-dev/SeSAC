const Comment = require('../model/Comment');

// GET /
exports.main = (req, res) => {
  res.render('index');
};

//GET / comments
exports.comments = (req, res) => {
  //   console.log(comments);
  //   res.send('응답');
  res.render('comments', {
    commentInfo: Comment.commentInfo(),
  });
};

//GET / comment
exports.comment = (req, res) => {
  const comments = Comment.commentInfo();
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
};
