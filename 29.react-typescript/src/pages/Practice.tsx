import { Link } from 'react-router-dom';
import HeaderMenu from '../components/HeaderMenu';

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <div>
        <Link to='/practice/codingon' style={{ marginRight: '10px' }}>
          코딩온 실습 문제 PostList
        </Link>
      </div>
    </>
  );
}
