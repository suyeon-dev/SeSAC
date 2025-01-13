import { useEffect, useState } from 'react';

const MyComponent = ({ number }) => {
  const [text, setText] = useState('');

  /* useEffect(effect[, dependency_array]) 
    - effect: 콜백함수    
    - dependency_array(의존성 배열): 의존성 배열에 있는 데이터가 변하면 콜백함수 실행
        - []: mount 됐을 때만 동작
        - 생략: mount, Update 시 언제나 동작
        - [data, data2, ...]: mount, 데이터가 update됐을 때 동작
    */

  // mount 시점에 실행
  useEffect(() => {
    console.log('함수형 컴포넌트 MOUNT! 🐛');
  }, []);

  // unmount 시점에 실행 (mount 시점에도 실행됨)
  useEffect(() => {
    // return 밖은 마운트 시점
    return () => {
      console.log('함수형 컴포넌트 UNMOUNT! 🔥');
    };
  }, []);

  // Update 시점에 실행 + Mount 시점 포함
  useEffect(() => {
    // txt, number 상태가 바뀔 때 모두 실행됨
    console.log('함수형 컴포넌트 UPDATE! 될 때마다 🦊');
  });

  // 특정 state 업데이트 + Mount 시점 포함
  useEffect(() => {
    console.log('함수형 컴포넌트 UPDATE! txt변경 👻');
  }, [text]);

  return (
    <>
      <p>MyComponent: {number}</p>
      <input
        type='text'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </>
  );
};

const LifeCycleFunction = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>plus</button>
      <button onClick={changeVisible}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};
export default LifeCycleFunction;
