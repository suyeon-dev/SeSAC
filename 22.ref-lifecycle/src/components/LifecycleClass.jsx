import React, { Component } from 'react';

//자식 컴포넌트
class MyComponent extends Component {
  // mount 되었을 때 동작
  componentDidMount() {
    console.log('mount 되었어요 🐛');
  }

  // 업데이트되었을 때 동작
  componentDidUpdate() {
    console.log('update 되었어요 🍎');
  }

  //unmount되기 직전 동작
  componentWillUnmount() {
    console.log('unmount 됩니다 🫡');
  }

  render() {
    // {this.props.number} 부모 컴포넌트에서 전달받은 Number prop
    return <p>MyComponent {this.props.number}</p>;
  }
}

// 부모 컴포넌트
class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>On/Off</button>
        {/* 
        - visible state 값에 따라서 MyComponent가 생성 및 제거됨
        */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
