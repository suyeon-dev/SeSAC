import { useContext, useRef } from 'react';
import { AgeContext } from '../context/AgeContext';
import { UserContext } from '../context/UserContext';

export default function Profile() {
  const ageContext = useContext(AgeContext);
  // App.js에서 AgeContext.Provider를 통해 전달된 값 가져옴
  // Provider로 감싸지 않은 경우에는 createContext의 기본값 반환

  const userContext = useContext(UserContext);
  console.log('ageContext', ageContext); //{age: 0, setAge: ƒ}
  console.log('userContext', userContext); //{name: '홍길동', setName: ƒ}

  const nameRef = useRef();
  const ageRef = useRef();

  console.log(nameRef.value);

  const { name, setName } = userContext;
  const { age, setAge } = ageContext;

  const changeInfo = () => {
    setAge(Number(ageRef.current.value));
    setName(nameRef.current.value);
  };

  return (
    <div>
      <h3>사용자 프로필</h3>
      <p>이름: &lt;context에서 값 가져오기 &gt;: {name}</p>
      <p>나이: &lt;context에서 값 가져오기 &gt;: {age}</p>

      <input type='text' placeholder='이름 입력' ref={nameRef} />
      <input type='number' placeholder='나이 입력' ref={ageRef} />
      <br />
      <button onClick={changeInfo}>변경</button>
    </div>
  );
}
