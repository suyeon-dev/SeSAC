// 함수형 컴포넌트 만들기
export default function UseJSX() {
  /* 1. inline style 사용해보기 */
  //   const divStyle = {
  //     width: '100px',
  //     height: '100px',
  //     backgroundColor: 'yellow',
  //     border: '1px solid gray',
  //     marginLeft: '.5rem',
  //     display: 'inline-block',
  //   };
  //   return (
  //     <div>
  //       <div style={{ color: '#fff', backgroundColor: 'red' }}>first</div>
  //       <div style={divStyle}>second</div>
  //       <div style={divStyle}>third</div>
  //     </div>
  //   );

  /* 2. JS문법 사용해보기 */
  //   let isShow = true;
  //   let str = 'suyeon';
  //   return (
  //     <div>
  //       <div style={{ backgroundColor: 'red' }}>
  //         {isShow ? 'isShow가 true일 때 보임' : ''}
  //       </div>
  //       <div style={{ backgroundColor: 'orange' }}>
  //         {/* isShow가 true라면 뒤의 문자열이 렌더링됨 */}
  //         {isShow && 'isShow가 true일 때 보임'}
  //       </div>
  //       <div style={{ backgroundColor: 'yellow' }}>
  //         {!isShow ? 'isShow가 false일 때 보임' : ''}
  //       </div>
  //       <div style={{ backgroundColor: 'green' }}>
  //         {!isShow && 'isShow가 false일 때 보임'}
  //       </div>
  //       <div>{str}님 안녕하세요👋🏻</div>
  //     </div>
  //   );

  /* 3. onClick 사용 */
  function myFunc() {
    alert('안녕 내 이름은 suyeon이야');
  }

  function addNum(a, b) {
    alert(a + b);
  }

  return (
    <div>
      {/* 매개변수가 없을 때 */}
      <span onClick={myFunc}>안녕하세요👋🏻</span>
      <span
        onClick={() => {
          myFunc();
        }}
      >
        안녕하세요👋🏻
      </span>
      <br></br>
      {/* 매개변수가 있을 때 */}
      <span onClick={() => addNum(8, 5)}>
        8+5의 결과를 alert로 확인해보세요.
      </span>
    </div>
  );
}
