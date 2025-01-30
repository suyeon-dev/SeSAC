import { useRef, useState } from 'react';

export default function SetText() {
  // [1] useState<T> Generic
  //   const [text, setText]= useState<string>('');
  const [text, setText] = useState('');

  // [2] useRef<T> Generic
  // - useRef는 값이 변경되어도 컴포넌트를 리렌더링하지 않는 훅
  //- ref 객체를 이용해서 DOM 접근 시 null 초기값 전달 필수
  const refVal = useRef<number>(0); //변수로 사용할 ref
  const refInput = useRef<HTMLInputElement>(null); // DOM 요소 접근

  // [2-1] refVal 변수를 변경하는 함수
  // - refVal.current 값이 변경되지만, 리렌더링 발생 x
  const changeRef = () => {
    refVal.current += 1;
    console.log('refVal:', refVal.current);
  };

  // [2-2] refInput DOM 요소 접근
  // - 사용자가 입력한 값을 가져와 state 값 변경
  const changeState = () => {
    if (refInput.current) {
      console.log('text state 변경 완료!');
      setText(refInput.current.value);
    }
  };

  // [3] 현재 상태와 input 값 확인 함수
  const checkString = () => {
    console.log('state string', text); //현재 state 값
    console.log('input value ref', refInput.current?.value); //현재 input 값
  };

  return (
    <div>
      <h2>useRef & useState 사용해보기</h2>
      <input type='text' ref={refInput} onChange={checkString} />
      <br></br>

      {/* input 값 -> state 저장 */}
      <button onClick={changeState}>state 변경!</button>

      {/* ref 값 증가 */}
      <button onClick={changeRef}>ref +1</button>

      {/* 현재 state 값 */}
      <p>state: {text}</p>

      {/* refVal 값이 변경되지만 리렌더링 발생 x */}
      <p>refVal: {refVal.current}</p>

      {/* 현재 input 값 */}
      <p>refInput의 value: {refInput.current?.value}</p>
    </div>
  );
}
