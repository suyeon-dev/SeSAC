import { useEffect, useMemo, useState } from 'react';

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? 'korea' : 'abroad',
  // };

  // 1. useMemo
  // location 객체 메모리에 저장 -> isKorea 변경될 때만 함수 실행
  // - [] 첫 렌더링 시에만 값 저장, 이후에는 재실행되지 않음
  // - [isKorea] 바꾸기 위해서는 의존성 배열에 저장
  const location = useMemo(() => {
    // Return 저장하고 싶은 값 -> 함수 실행결과로 반환된 객체 저장
    return { country: isKorea ? 'korea' : 'abroad' };
  }, [isKorea]);

  // 2. useEffect: 반환값 없음
  // useMemo 사용 전에는 Location 변경 없는데도 계속 실행됨
  useEffect(() => {
    console.log('location이 변경될 때마다 실ㅍ행됩니다 👻');
  }, [location]);

  return (
    <div style={{ border: '1px solid blue' }}>
      <input
        type='number'
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>나라 변경</button>
    </div>
  );
}
