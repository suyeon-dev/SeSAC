// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'suyeon',
  password: '1125',
  database: 'sesac',
});

// 1. 사용자 등록
// --user 테이블에 데이터 삽입 (insert into)
exports.postSignup = (data, cb) => {
  //--data = req.body (클라이언트에서 넘겨준 정보;터미널)
  console.log('model data', data); //{ id: '2', pw: '2', name: '2' }

  conn.query(
    `insert into user
      values(null,'${data.id}', '${data.name}', '${data.pw}')`
  ),
    (err, rows) => {
      if (err) throw err;
      console.log('model post', rows);
    };
};

// 2. 회원가입 성공 시 로그인 페이지 보여주기 (조회: select문)
exports.getSignin = (id, cb) => {
  conn.query(`select * from suer where id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log('Model 사용자 1명 조회', rows);
    cb(rows[0]);
  });
};

// 3. 사용자 조회 - select문
// 컨트롤러에서 cb와 함께 넘겨줌
