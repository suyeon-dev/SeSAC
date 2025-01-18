import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header classNmae='Header'>
      <span>logo</span>
      <div>
        <Link to={'/'} className='menu-item'>
          홈으로
        </Link>
        <Link to={'/test'} className='menu-item'>
          테스트
        </Link>
        <Link to={'/products'} className='menu-item'>
          Product
        </Link>
      </div>
    </header>
  );
}
