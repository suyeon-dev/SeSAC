import React, { useRef, useState } from 'react';

export default function Guestbook() {
  const [comment, setComment] = useState([
    { writer: '산타', title: '새해 복 많이 받으쇼' },
    { writer: '베베', title: '집에 갈래' },
    { writer: '도구리', title: '맛있는 사과 고르는 법' },
  ]);

  const [inputWriter, setInputWriter] = useState(''); //작성자 등록 input
  const [inputTitle, setInputTitle] = useState(''); //제목 등록 input

  const writerRef = useRef();
  const titleRef = useRef();

  const addComment = () => {
    if (!inputWriter) {
      writerRef.current.focus();
      return;
    }

    if (!titleRef) {
      titleRef.current.focus();
      return;
    }

    // 새 댓글
    let newCommnet = {
      writer: inputWriter,
      title: inputTitle,
    };

    // Concat 보다 전개 연산자를 더 많이 씀
    setComment([...comment, newCommnet]);
    setInputTitle('');
    setInputWriter('');
  };

  return (
    <>
      <form>
        <label htmlFor='writer'>작성자</label>
        <input
          type='text'
          name='writer'
          id='writer'
          value={inputWriter}
          ref={writerRef}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />{' '}
        {''}
        <label htmlFor='title'>제목</label>
        <input
          type='text'
          name='writer'
          id='title'
          value={inputTitle}
          ref={titleRef}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
        {''}
        <button type='button' onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
