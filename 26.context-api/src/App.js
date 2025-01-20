import { useState } from 'react';
import Box from './components/Box';
import Profile from './components/Profile';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';
import { AgeContext } from './context/AgeContext';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <>
      {/* 문자열 전달 */}
      <ThemeContext.Provider value={'dark'}>
        <Box />
      </ThemeContext.Provider>

      {/* 상태 전달 - 객체 형태*/}
      {/* <AgeContext.Provider value={{age:age, setAge: setAge}}>*/}
      <UserContext.Provider value={{ name, setName }}>
        <AgeContext.Provider value={{ age, setAge }}>
          <Profile />
        </AgeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
