import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg} 현재 number state는 ${number}입니다.`);
  };

  const consoleMsg = (e, msg) => {
    console.log(`${msg}~~ 현재 number state는 ${number}입니다.`);
    console.log(e.target); //<button>console확인</button>
  };

  const handleClick = (e) => {
    console.log('------차이점 확인하기-----');
    console.log(e.target); //실제로 눌리고 있는 것 : span
    console.log(e.currentTarget); //이벤트 발생하는 곳 : button
  };

  return (
    <div>
      <h3>number counter</h3>
      <h5>{number}</h5>

      <button onClick={increase}>더하기</button>
      <button onClick={() => alertMsg('안녕하세요?')}>alert출력</button>
      <button
        onClick={(e) => {
          consoleMsg(e, 'hello');
        }}
      >
        console확인
      </button>
      <button onClick={handleClick}>
        <span>handleClick</span>
      </button>
    </div>
  );
};
export default Counter;
