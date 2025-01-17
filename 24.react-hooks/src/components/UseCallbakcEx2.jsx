import React, { useCallback, useState } from 'react';

export default function UseCallbakcEx2() {
  const [text, setText] = useState('');
  // [*] 무조건 2번이 좋은 것은 아님..

  // [1] onChange: 렌더링 될 때마다 다시 메모리에 저장되고 있음
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };

  // [2] useCallback : 첫번째 렌더링이 되었을 때만 함수가 메모리에 저장됨
  // 메모리에 저장한 함수를 가져다 씀
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <input type='text' onChange={onChangeText} value={text} />
      <p>작성한 값: {text}</p>
    </div>
  );
}
