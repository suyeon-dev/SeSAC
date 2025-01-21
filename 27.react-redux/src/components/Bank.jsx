import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../store/module/bankReducer';
import { useState } from 'react';

export default function Bank() {
  const [inputNumber, setInputNumber] = useState(0);
  // useSelector: 여러 개가 저장되어 있는 store에서 '특정한 state'만 가져오기
  const balance = useSelector((state) => state.bank);
  console.log('잔액', balance);

  // useDispatch: action을 reducer로 전달
  const dispatch = useDispatch();
  return (
    <div>
      <p>잔액: {balance.toLocaleString()}원</p>
      <input
        type='number'
        step={10000}
        value={inputNumber}
        onChange={(e) => setInputNumber(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(inputNumber))}>입금</button>
      <button onClick={() => dispatch(withdraw(inputNumber))}>출금</button>
    </div>
  );
}
