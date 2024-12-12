// TODO: DB(mysql) 연결
// TODO: 모델 코드

// 0. MySQL 연결
const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'suyeon',
  password: '1125',
  database: 'sesac',
});

// 1. 새로운 회원정보 등록
// --user 테이블에 데이터 삽입 (insert into)
exports.postSignup = (data, cb) => {
  //--data = req.body (클라이언트에서 넘겨준 정보;터미널)
  console.log('model data', data); //{ id: , userid: , name: , pw: }

  const sql = `insert into user (userid, name, pw) 
  values('${data.userid}', '${data.name}', '${data.pw}')`;

  // conn.query(sql, 콜백함수)
  // -- 콜백함수: sql 쿼리 실행 완료 후 호출
  // -- 쿼리 실행 성공 시 rows 결과 객체 콜백으로 전달
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log('model postSignup:', rows);
    /* 쿼리 실행 결과 (객체)
      ResultSetHeader {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 21, //삽입된 행 ID
        info: '',
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 0
      }
      */

    // 작업 완료 후 컨트롤러 이동
    // -- view & controller에서 회원정보 사용하지 않기 때문에,
    // -- 데이터 보내주지 않고 응답 종료
    cb();
  });
};

// 2-로그인1. 특정 회원정보 조회: 로그인 가능 여부 (기준: id, pw)
// POST /user/signin
exports.postSignin = (data, cb) => {
  console.log('model postSignin data:', data); //{ userid: 'marsh', pw: '1125' }

  // limit 1 (쿼리 결과 행 반환 최대 1개로 제한) -> 조건에 맞는 첫번째 행 하나만 반환
  // -- 회원가입 시 중복 Id 검사하지 않아서 겹치는 id 생길 수 있음
  const sql = `select * from user where userid='${data.userid}' and pw='${data.pw}' limit 1`;

  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('Model 특정 회원정보:', rows);
    // 쿼리 결과; 각 요소가 객체인 배열 [{회원 데이터}]
    cb(rows); //[{id: , userid: , name: , pw: }]
  });
};

// 2-로그인2. 특정 회원정보 조회: 로그인 성공 시 회원정보 수정 페이지 이동(기준: id)
// POST /user/profile
exports.postProfile = (userid, cb) => {
  console.log('------로그인2-------');
  const sql = `select * from user where userid='${userid}' limit 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.error('sql문 실행 중 오류 발생🥲:', err);
      throw err;
    }
    //Model User [ { id: 21, userid: 'marsh', name: '마쉬멜로우', pw: '1125' } ]
    console.log('Model User:', rows);
    cb(rows);
  });
};

// 3. 특정 회원 정보 수정
// PATCH /user/profile/eidt
exports.editProfile = (data, cb) => {
  // console { id: '21', name: '마쉬멜로우', pw: '1125' }
  console.log('Model eidtProfile', data);
  const sql = `update user set name='${data.name}', pw='${data.pw}' where id='${data.id}'`;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Model editProfile 결과:', rows);
    /* ResultSetHeader {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        info: 'Rows matched: 1  Changed: 1  Warnings: 0',
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 1
      }
    */
    cb();
  });
};

// 4. 특정 회원 정보 삭제 (탈퇴 요청)
// POST /user/profile/delete
exports.deleteProfile = (id, cb) => {
  console.log('Model deleteProfile', id);
  const sql = `delete from user where id='${id}'`;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    cb();
  });
};
