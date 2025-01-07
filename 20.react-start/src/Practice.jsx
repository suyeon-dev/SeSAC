import React from 'react';

export default function Practice() {
  // 실습1
  let name = '베베';
  let animal = '댕댕이🐶';
  const spanStyle = {
    textDecoration: 'underline',
  };
  // 실습3
  let a = 999;
  let b = 1;

  return (
    <>
      {/* 실습1 */}
      <h2>
        제 반려동물의 이름은 <span style={spanStyle}>{name}</span>입니다.
      </h2>
      <h2>
        <span style={spanStyle}>{name}</span>는
        <span style={spanStyle}>{animal}</span>입니다.
      </h2>

      {/* 실습2 */}
      <p>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</p>

      {/* 실습3 */}
      <p>{a > b && 'a가 b보다 큽니다'}</p>
    </>
  );
}
