// TODO: 컨트롤러 코드
const User = require('../model/User');

// GET /user
exports.main = (req, res) => {
  res.render('index');
  //   res.send('응답!');
};

// GET /user/signup, 회원가입 페이지
exports.getSignup = (req, res) => {
  res.render('signup');
};

/* Model에게 DB 정보 요청 */
// 1. POST /user/signup, 새로운 회원 생성
exports.postSignup = (req, res) => {
  console.log('Cuser req.body', req.body); // 서버{ id: '2', pw: '2', name: '2' }

  User.postSignup(req.body, (result) => {
    console.log('DB 저장 결과:', result);
    if (result) {
      // 클라에 데이터 보낼 때 isSuccess 포함
      res.send({
        isSuccess: true,
        id: req.body.id,
      });
    } else {
      res.send({ isSuccess: false });
    }
  });
  //   res.send('응답!!');
};

// 2. GET /user/signin, 로그인 페이지 보여주기
exports.getSignin = (req, res) => {
  console.log('로그인 req.params', req.params);

  User.getSignin((result) => {
    console.log('Cuser result', result);
  });

  res.send('로그인 페이지 응답!');
};

// 3. POST /user/signin/:id, 로그인 회원 조회
exports.postSignin = (req, res) => {
  console.log('req.params', req.params);
  console.log(req.params.id);

  User.postSignin(req.params.id, (result) => {
    console.log('Cuser 1개의 데이터', result);
    // res.send(result)
  });
  res.send('로그인 회원 조회 응답!');
};

// POST /user/profile, 로그인 성공 시 회원정보 수정 페이지 접속

// PATCH /user/profile/edit, 회원정보 수정

// DELETE /user/profile/delete, 회원 삭제
