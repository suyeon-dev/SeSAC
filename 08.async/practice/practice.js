// (todo1) callback -> promise 변경
function call(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      console.log(name + '반가워');
      resolve(name); //promise 완료
    }, 1000);
  });
}

function back(txt) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(txt);
      console.log(txt + '을 실행했구나');
      resolve(txt);
    }, 1000);
  });
}

function hell(msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('여기는' + msg);
      resolve();
    }, 1000);
  });
}

call('kim')
  .then(() => back('back'))
  .then(() => hell('callbackhell'));

// (todo2) promise -> exec 함수(async) 만들어서 실행하게 하기

async function exec() {
  await call('kim');
  await back('back');
  await hell('callbackhell');
}
exec();

//(!!) then에서 리턴한 결과가 다음 then의 parameter로 들어감
