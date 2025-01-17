// 체크박스, 모달창열기, 다크모드 등 전환이 필요한 작업 때 사용

import { useState } from 'react';

export default function useToggle(initialState = false) {
  // value: toggle의 상태
  const [value, setValue] = useState(initialState);

  // toggleValue: value를 반대값으로 전환시키는 함수
  const toggleValue = () => setValue(!value);

  // 현재의 value값과 반대 전환 함수를 배열에 담아서 Return
  return [value, toggleValue];
}
