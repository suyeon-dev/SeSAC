const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const PORT = 8080;
/* middleware */
app.set('view engine', 'ejs');

/* api */
app.get('/', (req, res) => {
  res.render('talk-dm');
});

/* socket */
// 클라이언트에서 받은 사용자 닉네임 정보 저장 객체
const nickInfo = {}; // {socketId: nickname, ... , }

io.on('connection', (socket) => {
  // ------------------- 🔖 닉네임 사용 -------------------
  // [닉네임 사용]-2
  socket.on('checkNick', (nickname) => {
    // If문(닉네임 중복 검사) 작성 전 nickInfo 형태 확인
    // nickInfo[socket.id] = nickname;
    console.log(nickInfo); //{ LzSvKL19UkErW1c8AAAD: '돌고래' }

    console.log(Object.values(nickInfo)); // 현재 사용중인 닉네임 배열의 값을 배열로 반환 ['a', 'b', 'c']
    console.log(Object.values(nickInfo).indexOf(nickname)); //닉네임 중복 검사 : 존재(0)없음(-1)

    // 닉네임 중복 검사
    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      // console.log('존재하는 닉네임입니다.');
      // 중복된 닉네임일 때
      // (1) 입장 실패
      socket.emit('error', '이미 존재하는 닉네임입니다.');
    } else {
      // console.log('존재하지 않는 닉네임입니다.');
      // 중복되지 않은 닉네임
      nickInfo[socket.id] = nickname; // 현재 클라이언트 닉네임 정보 넣기
      // (2) 내 닉네임 정보 전달 : 닉네임 저장 성공 알림
      socket.emit('entrySuccess', nickname);
      // (3) 입장 성공, 입장 알림 메시지 전체에게 전달
      socket.broadcast.emit('notice', `${nickname}님이 입장하셨습니다`);
      // (4) 입장 성공, 나를 포함한 전체 client에게 전체 닉네임 정보 전달
      io.emit('updateNicks', nickInfo);
    }
  });
  // -------------------💬 채팅 메시지 전송 -----------------

  console.log('connected! >>', socket.id, socket.rooms);

  /* [1] 나 제외 모든 클라이언트에게 입장공지문 발송 */
  // socket.broadcast.emit('notice', `${socket.id}님이 입장하셨습니다`);

  // [3-2] 메시지를 하나의 클라이언트에게서 받아서 전체 클라이언트에게 전달
  socket.on('send', (msgData) => {
    // msgData: {myNick, dm='socket.id' 혹은 'all', msg}

    // socket.id는 내 아이디/ 남의 아이디일 수 있음
    if (msgData.dm === 'all') {
      // 전체에게 보내기
      io.emit('message', {
        id: msgData.myNick,
        message: msgData.msg,
      });
    } else {
      let dmSocketId = msgData.dm;
      // 특정 클라이언트에게만 보내기 (나를 제외)
      io.to(dmSocketId).emit('message', {
        id: msgData.myNick,
        message: msgData.msg,
        isDm: true, //DM인지 일반 대화인지의 여부
      });

      // 나에게만 보내기
      socket.emit('message', {
        id: msgData.myNick,
        message: msgData.msg,
        isDm: true,
      });
    }
  });

  // ---------------- [클라이언트 퇴장 공고] ----------------
  socket.on('disconnect', () => {
    io.emit('notice', `${nickInfo[socket.id]}님이 퇴장하셨습니다`);
    // nickInfo에서 삭제된 클라이언트 정보 삭제
    delete nickInfo[socket.id]; //객체에서 특정 데이터 삭제 구문
    console.log(nickInfo);
    io.emit('updateNicks', nickInfo); //닉네임 목록 갱신
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
