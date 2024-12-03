const Visitor = require('../model/Visitor');

// GET /
exports.main = (req, res) => {
  res.render('index');
};

// GET / visitors
exports.visitors = (req, res) => {
  /* [DB 연결 전] */
  // res.render('visitors', { data: Visitor.getVisitors() });

  /* [DB 연결 후] */
  // model.Visitors의 결과물 cb(rows) = 인자 result(배열 형태)
  Visitor.getVisitors((result) => {
    console.log('전체목록 Cvisitor.js', result);
    res.render('visitors', { data: result });
  });
};
