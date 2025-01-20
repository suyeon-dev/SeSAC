import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export default function Student() {
  const params = useParams(); // {name: 'anything'} // params로 가져오는 name
  const [nameParams] = useSearchParams();
  const nameQuery = nameParams.get('name'); //query로 가져오는 name

  const navigate = useNavigate();
  return (
    <main>
      <div>
        <p>학생 이름은 {params.name} 입니다.</p>
        {nameQuery && <p>실제 이름은 {nameQuery} 입니다.</p>}
      </div>

      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </main>
  );
}
