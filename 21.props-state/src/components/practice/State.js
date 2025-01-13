import { Component, useState } from 'react';

export default class PracticeClass extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <div>{number}</div>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 2 });
          }}
        >
          -2
        </button>
      </div>
    );
  }
}

export function PracticeState() {
  const [state, setState] = useState(0);
  const increase = () => {
    setState(state + 1);
  };
  const decrease = () => {
    /* setState((prev) => {
      return prev - 2;
    }); */
    setState(state - 2);
  };
  return (
    <div>
      <div>{state}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
