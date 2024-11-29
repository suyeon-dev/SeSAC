// 1. model에 접근해서 데이터를 가져오는 controller
const User = require('../model/User');

// 2. 어떤 경로로 들어왔을 때 해야할 일들
// GET /user
// (!) controller -> view로 넘겨주기
exports.getUser = (req, res) => {
  console.log(User.userInfo()); // {}
  //   res.send("응답 완료");
  res.render('user', { ...User.userInfo() });
  /* 
  { ...User.userInfo() }
  { realId: 'cocoa', realPw: 'qwer1234*', name: ' 홍길동', age: 20 }
  
  {userInfo: User.userInfo()}
  {userInfo: { 
      realId: 'cocoa', 
      realPw: 'qwer1234*', 
      name: ' 홍길동', 
      age: 20 }
  }
  */
};
