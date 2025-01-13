import { useState } from 'react';

export default function Guestbook() {
  const [tr, setTr] = useState([]);
  const [content, setContent] = useState({
    id: '',
    title: '',
    writer: '',
  });

  const addTr = (e) => {
    const newTr = {
      id: tr.length + 1,
      title: e.target.value,
      wrtier: e.target.value,
    };

    setTr(...tr, newTr);
    setContent({
      id: '',
      title: '',
      writer: '',
    });
  };

  return (
    <>
      <legend>
        <fieldset>
          작성자:{' '}
          <input
            value='content.writer'
            onChange={(e) => {
              setContent((prev) => ({ ...prev, writer: e.target.value }));
            }}
          />
          제목:{' '}
          <input
            value='content.title'
            onChange={(e) => {
              setContent((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
          <button onClick={addTr}>작성</button>
        </fieldset>
      </legend>

      <br></br>

      <div>
        <select>
          <option>작성자</option>
        </select>
        <input placehodler='검색어'></input>
        <button>검색</button>
      </div>

      <table border='1'>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {tr.map((row) => {
            <tr>
              <td></td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}

// {
//   tr.map((row) => (
//     <tr key={row.id}>
//       <td>{row.id}</td>
//       <td>{row.title}</td>
//       <td>{row.writer}</td>
//     </tr>
//   ));
// }
