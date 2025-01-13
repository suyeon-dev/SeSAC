import { useState } from 'react';

export default function Alphabet() {
  const [list, setList] = useState([
    { id: '1', alphabet: 'a' },
    { id: '2', alphabet: 'b' },
    { id: '3', alphabet: 'c' },
    { id: '4', alphabet: 'd' },
    { id: '5', alphabet: 'e' },
  ]);

  const [input, setInput] = useState('');

  const addAlphabet = (e) => {
    console.log([1, 2, 3, 4].concat(10)); //[1, 2, 3, 4, 10]

    const newList = list.concat({
      // (!) 삭제 여부와 관계없이 마지막 리스트의 아이디 기준
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alphabet: input,
    });
    setList(newList);
    setInput('');
  };
  // input 태그에 대고 엔터를 눌렀을 때 목록 추가
  const activeEnter = (e) => {
    console.log(e.key);
    if ((e.key = 'Enter')) {
      addAlphabet();
    }
  };

  // 목록 더블클릭 시 삭제
  const deleteAlphabet = (id) => {
    const newAlphabet = list.filter((alphabet) => {
      return alphabet.id !== id;
    });
    setList(newAlphabet);
  };

  // filter 알아보기
  const newArr = [1, 2, 3, 4, 5].filter((el) => {
    return el > 3; //filter의 return에는 조건이 들어간다
  });

  console.log(newArr);

  return (
    <div>
      <h2>alphabet</h2>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      ></input>
      <button onClick={addAlphabet}>추가하기</button>
      <ol>
        {list.map((el) => {
          return (
            <li key={el.id} onDoubleClick={() => deleteAlphabet(el.id)}>
              {el.alphabet}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
