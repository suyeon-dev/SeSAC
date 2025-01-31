import { Link } from 'react-router-dom';
import HeaderMenu from '../components/HeaderMenu';

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <div>
        <h2>실습 문제 풀기</h2>
        <Link to='/practice/codingon' style={{ marginRight: '10px' }}>
          코딩온 실습 문제 PostList
        </Link>
        <Link to={'matzip'}>맛집</Link>
      </div>
    </>
  );
}
