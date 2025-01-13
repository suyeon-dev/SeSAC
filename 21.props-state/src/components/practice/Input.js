import React from 'react';

export default function Input({ setData }) {
  //   console.log(setData);
  const handleChange = (e) => {
    /* {
        fruit: 'apple',
        background: 'white',
        color: 'balck',
        content: 'text',
    }*/
    setData((prev) => {
      //   console.log('target:', e.target); //input 태그
      //   console.log('current target:', e.currentTarget); //이벤트를 등록하는 요소, 이벤트 발생하는 곳
      return { ...prev, content: e.target.value };
    });
  };
  return (
    <div>
      {/* input 1개 */}
      내용:{' '}
      <input
        type='text'
        placeholder='내용을 입력하세요'
        onChange={handleChange}
      />
    </div>
  );
}
