import React, { useState } from 'react';

export default function ShowText() {
  const [txt, setTxt] = useState('사라져라');
  const [toggle, setToggle] = useState('block');

  const toggleHello = () => {
    if (toggle === 'block') {
      setTxt('보여라');
      setToggle('none');
    } else {
      setTxt('사라져라');
      setToggle('block');
    }
  };
  return (
    <>
      <button onClick={toggleHello}>{txt}</button>
      <div style={{ display: toggle }}>안녕하세요</div>
    </>
  );
}
