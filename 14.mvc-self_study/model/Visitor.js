const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost', //DB 설치된 호스트 IP주소
  user: 'suyeon', //DB 접속 유저 이름
  password: '1125', //DB 접속 비밀번호
  database: 'sprint',
});

exports.getVisitors = (cb) => {
  //연결 테스트
  conn.connect((err) => {
    if (err) {
      console.log('데이터베이스 연결 실패:', err);
      return;
    }
    console.log('데이터베이스 연결 성공!');
  });
  //쿼리 예시
  conn.query('select * from visitors', (err, rows) => {
    if (err) throw err;
    console.log('쿼리 결과:', rows); //visitors 테이블 전체 조회
    cb(rows); //controller에 정보 넘겨주자!
  });
};

//DB 연결 전 : (임시)DB로부터 방명록 데이터를 받아옴
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: '베베', comment: '어렵당' },
//     { id: 2, name: '??', comment: 'DB가 절 때렸어요' },
//   ];
// };
