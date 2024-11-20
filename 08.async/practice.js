// 기존 콜백 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log('back');
    cb('back');
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb('callback hell');
  }, 1000);
}

// 콜백 함수 실행
// call('kim', function (name) {
//   console.log(name + '반가워');
//   back(function (txt) {
//     console.log(txt + '를 실행했구나');
//     hell(function (msg) {
//       console.log('여기는 ' + msg);
//     });
//   });
// });

// 2. callback -> promise (then ~ catch)
function callPromise(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // cb 대신 resolve로 값 넘기기
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
  // reject 생략 가능
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve('callback hell');
    }, 1000);
  });
}

// name이 callPromise 이후의 then의 매개변수로 들어감 = result
// callPromise('kim')
//   .then((result) => {
//     console.log(result + ' 반가워');
//     return backPromise();
//   })
//   .then((txt) => {
//     // txt = 이전 then의 리턴값 (backPromise)= 'back'(resolve값)
//     console.log(txt + '을 실행했구나');
//     return hellPromise(); //다음 then에서 쓸 수 있도록 return
//     // return '안녕하세요' // 여기는 안녕하세요
//   })
//   .then((msg) => {
//     console.log('여기는 ' + msg);
//   });

// 3. async/await
async function execute() {
  const name = await callPromise('suyeon'); //resolve 값 담아주기 // 실행과 동시에 name에 값을 담음
  console.log(name + '반가워');
  const back = await backPromise();
  console.log(back + '을 실행했구나');
  const hell = await hellPromise();
  console.log('여기는 ' + hell);
}
execute();
