//기존 콜백 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}
function back(cb) {
  setTimeout(function () {
    console.log('callback');
    cb('callback');
  }, 1000);
}
function hell(cb) {
  setTimeout(function () {
    cb('callback hell');
  }, 1000);
}

//콜백함수 체인을 이용한 함수 호출
// call('suyeon', function (name) {
//   console.log(name + ' 반가워');
//   back(function (txt) {
//     console.log(txt + '을 실행했구나');
//     hell(function (msg) {
//       console.log('여기는' + msg);
//     });
//   });
// });

//(todo1) callback -> promise 변경
function callPromise(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); //cb 대신 resolve로 값 넘기기
    }, 1000);
  });
}

function backPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}

function hellPromise() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve('callback hell');
    }, 1000);
  });
}

// callPromise('suyeon')
//   .then((result) => {
//     console.log(result + '반가워');
//     return backPromise();
//   })
//   .then((txt) => {
//     console.log(txt + '을 실행했구나');
//     // return hellPromise();
//     return '안녕하세요';
//   })
//   .then((msg) => {
//     console.log('여기는' + msg);
//   });

//(todo2) promise -> exec(async) 함수 만들어서 실행
async function execute() {
  // resolve 값 담아주기; 실행과 동시에 name 값을 담음
  const name = await callPromise('sueyon');
  console.log(name + '반가워');
  const back = await backPromise();
  console.log(back + '을 실행했구나');
  const hell = await hellPromise();
  console.log('여기는' + hell);
}
execute();
