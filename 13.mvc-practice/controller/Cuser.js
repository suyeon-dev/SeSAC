// 1. model에 접근해서 데이터를 가져오는 controller
const User = require('../model/User');

// GET /
exports.main = (req, res) => {
  res.render('index');
};

// POST /login
exports.login = (req, res) => {
  console.log('req.body :', req.body); //{userId: '', userPw: ''}
  console.log('model :', User.getUserInfo()); //{realId: '', realPw: ''}

  //User model에서 유저 정보 가져오기
  // -- const userInfo = User.userInfo();
  // -- 함수 내보내기라서 호출 필요함
  const { realId, realPw } = User.getUserInfo(); // 객체 구조분해할당 {realId: '', realPw: ''}
  console.log('------');
  console.log(realId, realPw);
  const { userId, userPw } = req.body;

  // 입력값과 User.js 값 비교
  if (realId === userId && realPw === userPw) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
};

// POST /login2
exports.login2 = (req, res) => {
  console.log(User.user); //변수 내보내기니까 호출 필요없음

  /*
    배열 안에 객체가 있는 형태로 바꿔주자
    User.user :
      apple//1234//사과사과
      banana//4321//바나나나나
      cocoa//qwer1234//미떼
  */
  const users = []; //[{realId, realPw, name}, ...]
  const userIds = []; //['apple', 'banana', 'cocoa']
  const userData = User.user.split('\n'); //엔터 기준으로 나누기

  userData.forEach((user) => {
    //user = 'banana//4321//바나나나나'
    const userInfoArray = user.split('//'); // [banana, 4321, 바나나나나]
    const userObj = {
      realId: userInfoArray[0],
      realPw: userInfoArray[1],
      name: userInfoArray[2],
    };
    users.push(userObj);
    userIds.push(userInfoArray[0]);
  });

  console.log(userData);

  console.log('users', users);
  console.log('userIds', userIds);

  // /// 요청 정보를 바탕으로 회원이 맞는 지 확인
  // ----req.body.userId 클라이언트가 보내주는 정보
  // ---- idx >= 0 : userIds에 있는 회원
  // ---- idx === -1 : userIds에 없는 회원
  // ---- ['a', 'b', 'c'].indexOf('c'); //2
  const idx = userIds.indexOf(req.body.userId);
  if (idx >= 0) {
    console.log('아이디가 있는 회원');
    if (req.body.userPw === users[idx].realPw) {
      console.log('비밀번호 일치');
      res.send({ isSuccess: true, userName: users[idx].name });
    } else {
      console.log('비밀번호 불일치');
      res.send({ isSuccess: false });
    }
  } else {
    console.log('아이디가 없는 회원');
    res.send({ isSuccess: false });
  }
  // res.send('response');
};
