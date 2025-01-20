import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Bank() {
  // useSelector: 여러 개가 저장되어 있는 store에서 '특정한 state'만 가져오기
  const bank = useSelector((state) => state.bank);
  console.log('bank', bank);

  // useDispatch: action을 reducer로 전달
  const dispatch = useDispatch();
  console.log('dispatch', dispatch);

  return (
    <>
      <h1>코딩온 은행</h1>
      <h3>잔액: {bank}원</h3>
      <input type='number' />
      <button onClick={() => dispatch({ type: 'bank/DEPOSIT' })}>입금</button>
      <button onClick={() => dispatch({ type: 'bank/WITHDRAW' })}>출금</button>
    </>
  );
}
