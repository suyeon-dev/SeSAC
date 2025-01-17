import React, { useCallback, useEffect, useState } from 'react';

export default function UseCallbackEx1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  // [1] useCallback 사용 전
  // true 버튼이 바뀌는데 함수1도 계속 실행됨
  const func1 = () => {
    console.log('number: ' + number);
  };

  // [2]
  const func2 = useCallback(() => {
    console.log(`number: ${number} 👻`);
  }, [number]);

  useEffect(() => {
    console.log('함수 1 변경');
  }, [func1]);

  useEffect(() => {
    console.log('함수 2 변경');
  }, [func2]);

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        call function
      </button>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </div>
  );
}
