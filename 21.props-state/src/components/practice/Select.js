import React from 'react';

export default function Select({ setData }) {
  return (
    <div>
      {/* select 3개 */}
      과일:
      <select
        onChange={(e) => {
          console.log('target', e.target); //select 태그
          console.log('crrentTarget', e.currentTarget); //이벤트 발생하는 곳

          setData((prev) => {
            return { ...prev, fruit: e.target.value };
          });
        }}
      >
        <option value='apple'>사과</option>
        <option value='banana'>바나나</option>
        <option value='peach'>복숭아</option>
        <option value='grape'>포도</option>
      </select>
      배경색:
      <select
        onChange={(e) => {
          setData((prev) => {
            return { ...prev, background: e.target.value };
          });
        }}
      >
        <option value='black'>검정</option>
        <option value='white'>하양</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
      </select>
      글자색:
      <select
        onChange={(e) => {
          const color = e.target.value;
          setData((prev) => {
            return { ...prev, color };
          });
        }}
      >
        <option value='black'>검정</option>
        <option value='white'>하양</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
      </select>
    </div>
  );
}
