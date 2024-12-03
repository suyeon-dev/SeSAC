const Visitor = require('../model/Visitor');
// console.log(Visitor.getVisitors()); //cb수정없이 이거 지우면 해결됨 (콜백을 2번타게됨...!!)

// GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// GET /visitors => localhost:PORT/visitors
exports.getVisitors = (req, res) => {
  /* [DB 연결 전] */
  // res.render('visitors', { data: Visitor.getVisitors() });

  /* [DB 연결 후] */

  // Model.Visitor의 getVisitors 호출
  // -- model.Visitor의 결과물 cb(rows) = 인자 result(배열 형태)
  Visitor.getVisitors((result) => {
    // 전체목록 Cvisitor.js : [{id: , name: , comment: }, ...]
    console.log('전체목록 Cvisitor.js', result);
    // 콜백함수: 데이터를 visitors라는 Ejs템플릿에 전달해서 렌더링
    res.render('visitors', { data: result });
  });
};
