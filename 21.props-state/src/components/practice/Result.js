import React from 'react';

export default function Result(props) {
  const { content, fruit, color, background } = props.data;
  console.log('data', props.data);

  return (
    <div>
      {/* 결과화면: img + p */}
      <img src={`/${fruit}.jpg`} width={100} height={100} />
      <p
        style={{
          backgroundColor: background,
          color,
          width: '100px',
          height: '30px',
          textAlign: 'center',
          lineHeight: '50px',
        }}
      >
        {content}
      </p>
    </div>
  );
}
