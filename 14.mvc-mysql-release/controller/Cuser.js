// TODO: 컨트롤러 코드
const User = require('../model/User');

// GET /user
exports.main = (req, res) => {
  res.render('index');
  //   res.send('응답!');
};

// GET /user/signup
exports.getSignup = (req, res) => {
  res.render('signup');
};

// GET /user/signin
exports.getSignin = (req, res) => {
  res.render('signin');
};

/* Model에게 DB 정보 요청 */
// 1. POST /user/signup, 새로운 회원 생성
exports.postSignup = (req, res) => {
  // req.body : 클라이언트가 보낸 데이터를 받음
  console.log('Cuser req.body', req.body); // 서버{ id: '2', pw: '2', name: '2' }

  // 모델로 데이터 전달 & DB 작업 수행
  User.postSignup(req.body, () => {
    // 모델 작업 완료 시 실행할 함수
    res.end();
    //   res.send('응답!!'); //데이터를 클라이언트로 보냄
  });
};

// 2. POST /user/signin
// 로그인1 로그인 가능한 계정인지 조회
exports.postSignin = (req, res) => {
  console.log('postSignin', req.body); // { userid: 'marsh', pw: '1125' }

  // 모델로 데이터 전달
  User.postSignin(req.body, (result) => {
    //모델 결과 [ { id: 21, userid: 'marsh', name: '마쉬멜로우', pw: '1125' } ]
    console.log('모델에서 받은 로그인 결과:', result);
    console.log(result.length);

    if (result.length > 0) {
      res.send({ isLogin: true, userInfo: result[0] });
    } else {
      res.send({ isLogin: false });
      // 프론트에서 데이터 확인할 때 res.data가 아니라 res.data.isLogin 확인
    }
  });
};

// POST /user/profile
// 로그인2(로그인 성공) 회원정보 수정 페이지 접속
exports.postProfile = (req, res) => {
  console.log('postProfile', req.body); //{userid: 'marsh'}

  User.postProfile(req.body.userid, (result) => {
    //postSignin에서 userid 테이블이 있을 때만 /user/profile에 POST 요청 보내기 때문에
    //userid가 넘어 오는 지 아닌 확인 안 해도 됨
    res.render('profile', { data: result[0] });
  });
};

// PATCH /user/profile/edit, 회원정보 수정
exports.editProfile = (req, res) => {
  //console { id: '21', name: '마쉬멜로우', pw: '1125' }
  console.log('Controller editProfile', req.body); //profile.ejs 클라이언트 입력
  User.editProfile(req.body, () => {
    // res.send('회원정보 수정 성공');
    res.end();
  });
};

// DELETE /user/profile/delete, 회원 삭제
exports.deleteProfile = (req, res) => {
  console.log('controller deleteProfile', req.body);

  User.deleteProfile(req.body.id, () => {
    res.send('컨트롤러 회원 삭제 응답');
  });
};
