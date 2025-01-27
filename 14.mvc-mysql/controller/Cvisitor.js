const Visitor = require('../model/Visitor');
// console.log(Visitor.getVisitors()); //cb수정없이 이거 지우면 해결됨 (콜백을 2번타게됨...!!)

/* GET / => localhost:PORT/ */
exports.main = (req, res) => {
  res.render('index');
};

/* 1. GET /visitors => localhost:PORT/visitors */
exports.getVisitors = (req, res) => {
  /* [DB 연결 전] */
  // res.render('visitors', { data: Visitor.getVisitors() });

  /* [DB 연결 후] */

  // Model.Visitor의 getVisitors 호출
  // -- model.Visitor의 결과물 cb(rows) = 인자 result(배열 형태)
  Visitor.getVisitors((result) => {
    // 전체목록 Cvisitor.js : [{id: , name: , comment: }, ...]
    console.log('전체목록 Cvisitor.js', result); //모델의 select문의 결과
    // 콜백함수: 데이터를 visitors라는 Ejs템플릿에 전달해서 렌더링
    res.render('visitors', { data: result });
  });
};

/* 2. GET /visitor/:id */
// - get 요청은 params, query 두가지 방법으로 받을 수 있음 -> params
exports.getVisitor = (req, res) => {
  console.log('req.params', req.params); //{id: '1'}
  console.log(req.params.id); //1 -> req.params.id를 사용해 URL에서 전달받은 id 값을 가져옴

  Visitor.getVisitor(req.params.id, (result) => {
    //Cvisitor 1개의 데이터 { id: 19, name: '산타', comment: '호호호호!' }
    console.log('Cvisitor 1개의 데이터', result);
    res.send(result); //콜백 안에서 응답하기
  });
  // res.send('response');
};

/* 3. POST /visitor, 등록 */
exports.postVisitor = (req, res) => {
  console.log('req.body', req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log('Cvisitor.js:', result); //result=Visitor의 cb(rows.insertId)
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};

/* 4. DELETE /visitor, 삭제 */
// - delete 요청은 query, params, body 전달 모두 가능
exports.deleteVisitor = (req, res) => {
  console.log('Cvisitor req.body', req.body); //{ id: '4' }
  console.log('Cvisitor req.body.id', req.body.id); //4
  //삭제 후 실행하는 일 : 콜백함수
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + '번 id 삭제 완료');
  });
  // res.send('response!');
};
/* 5. PATCH /visitor, 수정 */
exports.patchVisitor = (req, res) => {
  console.log('req.body', req.body);
  // res.send('response patch!');
  Visitor.patchVisitor(req.body, () => {
    res.send('수정 완료');
  });
};
