import { useState } from 'react';

export default function Emoji() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <>
      {number > 7 ? <p>{number} 😈</p> : <p>{number} 😇</p>}
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>
    </>
  );
}
