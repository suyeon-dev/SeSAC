import { useNavigate, useParams } from 'react-router-dom';

export default function PorductDetailPage({ products }) {
  const navigate = useNavigate();

  console.log(products);

  // 인자를 받은 이유: params를 통해서 몇 번 Id 정보를 찾고 있는 지 확인
  const params = useParams();
  console.log('params:', params);
  // {productID: '1'}
  // Key이름의 출처? Route 컴포넌트의 path props 확인!

  // 객체 구조 분해 할당
  const { productID } = useParams(); // 찾고 있는 데이터에 대한 id 값
  console.log(productID); //productID는 문자열, console에 찍힌 id는 숫자

  // productID 기준으로 products에서 원하는 데이터 찾기 (객체 형태)
  const [targetProduct] = products.filter((p) => p.id === Number(productID));

  console.log('targetProduct', targetProduct);
  // {id, name, body, email} or undefined

  if (!targetProduct) {
    return <main>없는 상품이예요</main>;
  }

  return (
    <main>
      <p>여기는 상품 디테일 페이지</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동</button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
}
