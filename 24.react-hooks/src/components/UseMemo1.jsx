import { useMemo, useState } from 'react';

export default function UseMemo1() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState('');

  //   [useMemo 사용 전]
  // 문제: input 스테이트가 변경될 때도 연산이 이루어짐 > calc() 호출 중
  const calc = () => {
    console.log('계산 중...');

    return number * 2;
  };

  // [useMemo 사용 후]
  // 해결: 특정 값이 바뀔 때만 calc() 함수 호출되도록
  // number 값이 변경될 때만 함수를 재실행하고 값을 저장
  const calc2 = useMemo(() => {
    console.log('계산 중...2');

    // return 이후의 number * 2값이 Memoization 됨
    return number * 2;
  }, [number]);

  return (
    <>
      <input
        type='text'
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <p>number: {number}</p>
      <p>clac: {calc()}</p>
      <p>clac2: {calc2}</p>
    </>
  );
}
