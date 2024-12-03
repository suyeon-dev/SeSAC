const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'suyeon',
  password: '1125',
  database: 'sesac',
});

exports.getVisitors = (cb) => {
  // 연결 테스트
  conn.connect((err) => {
    if (err) {
      console.error('데이터베이스 연결 실패:', err);
      return;
    }
    console.log('데이터베이스에 성공적으로 연결되었습니다.');
  });
  // conn.query 비동기로 DB에서 데이터 조회
  conn.query('SELECT * FROM visitor', (err, rows) => {
    // 쿼리 실행 중 에러 발생하면 중단
    if (err) throw err;
    // 쿼리 결과 Visitor.js : //[{id: , name: , comment: }, {}, ..]
    console.log('쿼리 결과 Visitor.js:', rows);
    cb(rows); //결과 데이터를 Cvisitor.js 컨트롤러로 전달
  });
};

// (임시) DB로부터 방명록 데이터를 받아옴
// exports.getVisitors = (cb) => {
//   console.log('cb의 타입:', typeof cb); //콜백 타입
//   /* [DB 연결 전] */
//   // return [
//   //   { id: 1, name: '홍길동', comment: '내가 왔다!!' },
//   //   { id: 2, name: '이찬혁', comment: '으라차차' },
//   // ];
//   /* [DB 연결 후] */
//   conn.query('select * from visitor', (err, rows) => {
//     if (err) {
//       // throw err;
//       console.error('DB 에러 발생:', err);
//       return cb(err, null);
//     }

//     console.log('visitor 테이블의 전체 조회:', rows); //query문의 결과

//     // cb(rows); //controller에 정보 넘겨주자~!
//     cb(null, rows);
//   });
// };
