import React, { useState } from 'react';

export default function GuestbookSol() {
  const [comment, setComment] = useState([
    { writer: '산타', title: '새해 복 많이 받으쇼' },
    { writer: '베베', title: '집에 갈래' },
    { writer: '도구리', title: '맛있는 사과 고르는 법' },
  ]);

  const [inputWriter, setInputWriter] = useState(''); //작성자 등록 input
  const [inputTitle, setInputTitle] = useState(''); //제목 등록 input
  const [inputSearch, setInputSearch] = useState(''); //검색어 input

  const [result, setResult] = useState([]); // 검색 결과에 대한 배열
  const [searchType, setSearchType] = useState('writer');

  const addComment = () => {
    let newCommnet = {
      writer: inputWriter,
      title: inputTitle,
    };

    // Concat 보다 전개 연산자를 더 많이 씀
    setComment([...comment, newCommnet]);
    setInputTitle('');
    setInputWriter('');
  };

  // 검색을 실행하는 함수
  const searchComment = () => {
    // 작성자 기준 검색
    let searchResult = comment.filter((item) => {
      console.log('item', item); // 객체 {writer: '도구리', title: '맛있는 사과 고르는 법'}
      console.log(item[searchType]);

      console.log('안녕하세요'.includes('안녕')); //true
      console.log('안녕하세요'.includes('hi')); //false

      console.log('검색어 검사', item[searchType].includes(inputSearch));

      if (!item[searchType].includes(inputSearch)) {
        return null;
      }
      return item;
    });
    console.log(searchResult); //배열
    setResult(searchResult); //검색어 결과 설정
    setInputSearch('');
  };

  // searchType에 따라 어떤 검색을 할 지 결정
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
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
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
        {''}
        <button type='button' onClick={addComment}>
          작성
        </button>
      </form>
      {/* 검색폼 */}
      <form>
        <select name='type' onChange={selectSearchType}>
          <option value={'writer'}>작성자</option>
          <option value={'title'}>제목</option>
        </select>
        <input
          type='text'
          onChange={(e) => setInputSearch(e.target.value)}
          name='search'
          value={inputSearch}
          placeholder='검색어를 입력해주세요'
        />
        <button type='button' onClick={searchComment}>
          검색
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

      <h4>검색결과</h4>
      {result.length == 0 ? (
        <h3>검색 결과가 없어요!🥲</h3>
      ) : (
        <table border={1} style={{ width: '500px', margin: '0 auto' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
