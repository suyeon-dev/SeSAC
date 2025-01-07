import { Component } from 'react';

// 클래스형 컴포넌트
class ClassComponent extends Component {
  render() {
    const name = 'class';
    return (
      <h2 style={{ color: 'blue' }} onClick={() => alert('👻클릭하셨군요!👻')}>
        {name}형 컴포넌트 사용은 요렇게 합니다👻
      </h2>
    );
  }
}

export default ClassComponent;
