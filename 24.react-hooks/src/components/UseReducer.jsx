//  [*] 쉬운 버전의 Redux
import React, { useReducer, useState } from 'react';

// [*] 문자열 상수 관리 -> 별도 파일
const BANK_ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
};

// [reducer] dispatch의 요구사항인 action이 reducer의 두번째 인자로 들어옴
// action = {type, payload}
// -- money state를 바꿔주는 Reducer (action에 따라 State를 Return)
const reducer = (prevState, action) => {
  console.log('dispatch 함수가 호출되면, Reducer 동작!');
  console.log('prevState: ', prevState); //0 (Money state)
  console.log('action:', action); // dispatch 인자

  switch (action.type) {
    case BANK_ACTION_TYPES.deposit:
      return prevState + action.payload;
    case BANK_ACTION_TYPES.withdraw:
      return prevState - action.payload;
    default:
      return prevState;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>useReducer 사용하기</h2>
      <p>현재 잔고: {money}원</p>
      <input
        type='number'
        value={number}
        step={1000}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <br />
      {/* dispatch(요청의 주체)의 형식은 통일 */}
      {/* dispatch(action) : reducer = (prevState, action)=>{} */}
      <button
        onClick={() =>
          dispatch({ type: BANK_ACTION_TYPES.deposit, payload: number })
        }
      >
        예금
      </button>
      <button
        onClick={() =>
          dispatch({ type: BANK_ACTION_TYPES.withdraw, payload: number })
        }
      >
        출금
      </button>
    </>
  );
}
