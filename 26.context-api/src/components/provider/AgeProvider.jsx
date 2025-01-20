import { useState } from 'react';
import { AgeContext } from '../../context/AgeContext';

// App.js state관리를 하는 것이 아닌
// 해당 state를 관리할 Provider를 따로 선언
export function AgeProvider({ children }) {
  const [age, setAge] = useState(0);

  return (
    <AgeContext.Provider value={(age, setAge)}>{children}</AgeContext.Provider>
  );
}
