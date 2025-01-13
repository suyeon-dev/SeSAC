import React, { useState } from 'react';
import Select from './Select';
import Input from './Input';
import Result from './Result';

export default function FruitsSol() {
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'white',
    color: 'balck',
    content: 'text',
  });

  return (
    <div>
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
    </div>
  );
}
