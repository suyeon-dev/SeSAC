import { useState } from 'react';

export default function Fruits() {
  const [img, setImg] = useState('/apple.jpg');
  const [input, setInput] = useState('text');
  const [bgColor, setBgColor] = useState('black');
  const [txtColor, setTextColor] = useState('white');

  // 스타일
  const resultStyle = {
    width: '500px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
  };
  const imgStyle = {
    height: '90%',
    objectFit: 'fill',
  };

  const txtBoxStyle = {
    height: '10%',
    backgroundColor: bgColor,
    color: txtColor,
    fontSize: '1.5rem',
    padding: '10px',
  };

  // 이벤트
  function printImg(e) {
    console.log(e.target.value);
    setImg(`${e.target.value}.jpg`);
  }

  function printInput(e) {
    setInput(e.target.value);
  }

  function changeBg(e) {
    setBgColor(e.target.value);
  }

  function changeTextColor(e) {
    setTextColor(e.target.value);
  }

  return (
    <>
      {/* 선택창 */}
      <span>과일:</span>
      <select
        name='fruits'
        onChange={(e) => {
          printImg(e);
          console.log(e.target.value);
        }}
      >
        <option value='apple'>사과</option>
        <option value='banana'>바나나</option>
        <option value='peach'>복숭아</option>
        <option value='grape'>포도</option>
      </select>

      <span>배경색:</span>
      <select
        name='boxColors'
        onChange={(e) => {
          changeBg(e);
          //   console.log(e.target.value);
        }}
      >
        <option value='black'>검정</option>
        <option value='white'>하양</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
        <option value='yellow'>노랑</option>
        <option value='green'>초록</option>
        <option value='blue'>파랑</option>
        <option value='purple'>보라</option>
        <option value='pink'>분홍</option>
      </select>

      <span>글자색:</span>
      <select
        name='fontColors'
        onChange={(e) => {
          changeTextColor(e);
        }}
      >
        <option value='black'>검정</option>
        <option value='white'>하양</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
        <option value='yellow'>노랑</option>
        <option value='green'>초록</option>
        <option value='blue'>파랑</option>
        <option value='purple'>보라</option>
        <option value='pink'>분홍</option>
      </select>

      <div>
        <span>내용 :</span>
        <input
          type='text'
          onChange={(e) => {
            printInput(e);
          }}
        ></input>
      </div>

      {/* 결과 */}
      <div style={resultStyle}>
        <img style={imgStyle} src={img} alt={`${img}`} />
        <div style={txtBoxStyle}>{input}</div>
      </div>
    </>
  );
}
