import { Component } from 'react';

export default class HandlerEx extends Component {
  state = { str: 'Hello World!' };

  render() {
    const { str } = this.state;
    return (
      <>
        <h2>{str}</h2>
        <br></br>
        <button
          onClick={() => {
            this.setState({ str: 'Goodbye World!' });
          }}
        >
          클릭
        </button>
      </>
    );
  }
}
