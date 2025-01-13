import React, { useRef, useState } from 'react';

/* 함수형에서 useRef 사용하기 : useRef() */

// 1. DOM 요소 선택을 위한 ref
export function RefFucntion1() {
  // (1) Ref 객체 만들기
  const inputRef = useRef();

  // (3) ref.current에 접근해서 원하는 작업 진행
  const handleFocus = () => {
    console.log(inputRef.current); //태그 자체
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };

  return (
    <>
      {/* (2) 선택하고 싶은 태그에 Ref 전달 */}
      <input type='text' ref={inputRef}></input>
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </>
  );
}

// 2. 변수처럼 사용하는 ref
export function RefFucntion2() {
  const ref = useRef(1); //ref변수
  const [state, setState] = useState(1); //state변수
  let variable = 1; //js변수

  const plusRef = () => {
    ref.current += 1;
    console.log('ref.current', ref.current);
  };
  const plusState = () => {
    //state가 변경된다. re-rendering
    //== 함수(컴포넌트)가 다시 읽힌다
    //== 변수(Varialbe)는 기존값으로 초기화되어 화면에 반영되지 않는다
    setState(state + 1);
    console.log('state');
    console.log('state', state);
  };
  const plusLet = () => {
    variable += 1;
    console.log('varialbe', variable);
  };

  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>Plus ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>Plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusLet}>Plus variable</button>
    </div>
  );
}
