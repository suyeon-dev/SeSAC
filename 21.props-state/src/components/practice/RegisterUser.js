import React, { useState } from 'react';

export default function RegisterUser() {
  const [list, setList] = useState([
    { id: '1', name: '코디', email: 'codi@gmail.com' },
    { id: '2', name: '나', email: 'me@gmail.com' },
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const registerUser = () => {
    const newList = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: name,
      email: email,
    });
    setList(newList);
    setName('');
    setEmail('');

    console.log(newList);
  };

  //enter 추가
  const activeEnter = (e) => {
    // console.log(e.key);
    if (e.keyCode === 13) {
      registerUser();
    }
  };

  //dbClick 삭제
  const deleteUser = (id) => {
    const newUser = list.filter((user) => {
      return user.id !== id;
    });
    setList(newUser);
  };

  return (
    <>
      <input
        placeholder='이름'
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyPress={activeEnter}
      />
      <input
        placeholder='이메일'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyPress={activeEnter}
      />
      <button onClick={registerUser}>등록</button>

      {/* 등록 정보 */}
      <ol>
        {list.map((el) => {
          return (
            <li key={el.id} onDoubleClick={() => deleteUser(el.id)}>
              {el.name} {el.email}
            </li>
          );
        })}
      </ol>
    </>
  );
}
