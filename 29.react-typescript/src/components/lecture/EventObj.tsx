import React from 'react';

export default function EventObj() {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    console.log(e);
    console.log(e.target);
    // console.log(e.target.value);//에러 changeEvent가 아니라서 value 없음
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('event', event);
    console.log('event.target.value', event.target.value);
  }
  function handleKeyDown(a: React.KeyboardEvent<HTMLInputElement>) {
    console.log('a.key', a.key);
    console.log('a.code', a.code);
    // console.log(a.KeyCode); //legacy keyCode는 더 이상 사용되지 않음
  }

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      {/* onClick 내에서 event 전달받을 때는
        이벤트 타입 작성하지 않아도 됨 */}
      <div onClick={(e) => console.log(e)}>onClick(익명함수)</div>
      <div onClick={handleClick}>onClick(함수 호출)</div>
      <div>
        <span>onChange</span>
        <input type='text' onChange={handleChange}></input>
      </div>
      <div>
        <span>onKeyDown</span>
        <input type='text' onKeyDown={handleKeyDown}></input>
      </div>
      <div onDrag={handleClick}>onDrag</div>
    </div>
  );
}
