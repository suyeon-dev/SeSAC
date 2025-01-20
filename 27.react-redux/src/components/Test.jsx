import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const number = useSelector((state) => state);
  console.log('number', number);

  const dispatch = useDispatch();

  return (
    <>
      <h4>state 값 가져오기</h4>
      <p>store에 저장되어 있는 number state: {number}</p>

      <h4>state 값 변경하기</h4>
      <button onClick={() => dispatch({ type: '증가' })}>
        number state +1
      </button>
      <button onClick={() => dispatch({ type: '감소' })}>
        number state -1
      </button>
    </>
  );
}
