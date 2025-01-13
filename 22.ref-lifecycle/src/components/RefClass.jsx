import React from 'react';

/* 클래스형 컴포넌트에서 ref 사용법 */

//1. 콜백함수
export class RefClass1 extends React.Component {
  handleFocus = () => {
    console.log(this.myInput); //input 태그 자체
    console.log(this.myInput.value); // input 값
    this.myInput.focus();
  };

  render() {
    return (
      <div>
        <p>클래스형 컴포넌트, 버튼 클릭 시 input에 foucs 처리</p>
        <p>ref 속성에 콜백 전달</p>
        <input
          type='text'
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}

// 2. 내장함수 createRef
export class RefClass2 extends React.Component {
  // createRef()를 사용해서 ref 객체를 사용
  myInput = React.createRef();

  handleFocus = () => {
    // current로 접근
    console.log(this.myInput.current); // 태그
    console.log(this.myInput.current.value); //input 값
    this.myInput.current.focus();
  };
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트, 버튼 클릭 시 input에 foucs 처리</p>
        <p>createRef()를 통해서 ref 객체 생성</p>
        <input type='text' ref={this.myInput}></input>
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
