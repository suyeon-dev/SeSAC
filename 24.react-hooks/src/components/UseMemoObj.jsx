import { useEffect, useMemo, useState } from 'react';

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? 'korea' : 'abroad',
  // };

  // useMemo
  // - [] 첫 렌더링 시에만 값 저장, 그 후에는 변경 x
  // - [location] 바꾸기 위해서는 의존성 배열에 저장
  const location = useMemo(() => {
    // Return 저장하고 싶은 값
    return { country: isKorea ? 'korea' : 'abroad' };
  }, [isKorea]);

  useEffect(() => {
    console.log('location이 변경될 때마다 실행됩니다 👻');
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
