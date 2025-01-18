import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function StudentPage({ name }) {
  const navigate = useNavigate();

  // /student/new?name=suyeon
  const [searchQuery] = useSearchParams();
  console.log('name이라는 쿼리 파라미터 값:', searchQuery.get('name')); //suyeon
  const realName = searchQuery.get('name');

  return (
    <div className='container'>
      <p>
        학생의 이름은 <span className='nickname'>{name}</span> 입니다.
      </p>
      {name === 'new' && (
        <p className='indent'>
          실제 이름은 <span className='realName'>{realName}</span>
        </p>
      )}
      <button className='indent' onClick={() => navigate(-1)}>
        이전페이지로
      </button>
    </div>
  );
}
