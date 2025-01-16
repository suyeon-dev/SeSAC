import React, { useEffect, useRef, useState } from 'react';

export default function NumberQuiz() {
  const [nums, setNums] = useState({ x: 0, y: 0 });
  const [input, setInput] = useState('');
  const [op, setOp] = useState('');

  const inputRef = useRef();

  const getRandomOp = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    /* 수정 전 */
    // const randomOp = operators[randomIndex];
    // return setOp(randomOp);// setOp는 op상태를 설정, 반환값을 함수 호출로 사용 x

    /* 수정 후 */
    const randomOp = operators[randomIndex];
    setOp(randomOp);
    return randomOp;
  };

  const createQuiz = () => {
    setNums({
      x: Math.floor(Math.random() * 11),
      y: Math.floor(Math.random() * 11),
    });
    setOp(getRandomOp);
    setInput('');
  };

  useEffect(() => {
    createQuiz();
  }, []);

  const submitAnswer = () => {
    // 수정 전: const { x, y } = setNums(nums); //setNums는 상태 업데이트 함수이므로 상태를 직접 반환하지 않음
    const { x, y } = nums; //nums 상태값 가져오기

    // 수정 전: const op = getRandomOp(); //op상태 갱신 처리 x, getRandomOp 함수 반환값 올바르게 처리x
    const currentOp = op || getRandomOp();
    setOp(currentOp);

    // focus
    if (!input) {
      inputRef.current.focus();
      return;
    }

    let answer;

    // 정답 계산
    if (currentOp === '+') {
      answer = x + y;
    } else if (currentOp === '-') {
      answer = x - y;
    } else if (currentOp === '*') {
      answer = x * y;
    }

    // 정답 여부 확인
    if (Number(input) === answer) {
      alert('정답!! 당신은 수학 천재🥳');
    } else alert(`오답🥲 정답은 ${answer}입니다`);

    setNums({
      x: Math.floor(Math.random() * 11),
      y: Math.floor(Math.random() * 11),
    });

    createQuiz();
  };

  return (
    <>
      <div>
        {nums.x} {op} {nums.y}{' '}
      </div>
      <input
        type='number'
        value={input}
        ref={inputRef}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={submitAnswer}>정답 제출!</button>
    </>
  );
}
