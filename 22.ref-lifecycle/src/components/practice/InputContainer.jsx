import { useRef, useState } from 'react';

export default function InputContainer() {
  const inputRef = useRef();

  const [color, setColor] = useState(''); //input
  const [containerColor, setContainerColor] = useState('');

  const changeColor = () => {
    if (!color) {
      inputRef.current.focus();
      return;
    }
    // setColor(e.target.value);
    // console.log('e.target.value', e.target.value); //''

    // setContainerColor(e.target.value); // e.target이 button이라 value속성 없으므로 undefined/Null
    // console.log('e.target.value', e.target.value);
    setContainerColor(color);
    setColor('');
    return;
  };

  return (
    <div
      style={{
        backgroundColor: containerColor,
        width: '200px',
        height: '100px',
      }}
    >
      <input
        ref={inputRef}
        type='text'
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          // console.log('여기는 Input', e.target.value);
        }}
      />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
