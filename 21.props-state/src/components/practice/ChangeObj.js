import React, { useState } from 'react';

export default function ChangeObj({ objArr }) {
  console.log(objArr);
  const [index, setIndex] = useState(0);
  const { name, age, nickName } = objArr[index];

  const changeMember = () => {
    // 기존 풀이
    // setIndex((prev) => {
    //   return prev + 1;
    // });

    // (!) if문으로 현재 인덱스 기준으로 2일 때 처리해주기
    if (index >= objArr.length - 1) {
      return setIndex(0);
    } else {
      return setIndex(index + 1);
    }
  };

  return (
    <>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>별명: {nickName}</p>

      <button onClick={changeMember}>멤버 바꾸기</button>
    </>
  );
}
