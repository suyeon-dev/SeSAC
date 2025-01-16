export default function BasicCSS() {
  const childDiv = {
    backgroundColor: 'pink',
    width: '100px',
    height: '100px',
    textAlign: 'center',
    lineHeight: '100px',
    fontSize: '0.7rem',
  };
  return (
    <>
      <h3>스타일 적용 방법</h3>
      <ol>
        <li>인라인 스타일</li>
        <li>css 파일 만들어서 Import</li>
        <li>.module.css 파일 만들어서 import</li>
        <li>styled-components 라이브러리 사용(설치 필요)</li>
        <li>SASS 사용(설치 필요)</li>
      </ol>

      <h4 style={{ color: '#888' }}>1. 인라인 스타일로 적용</h4>
      <div style={{ backgroundColor: '#ddd' }}>
        <div style={childDiv}>나도 pro사고싶다!!!!</div>
      </div>

      <h4>2. CSS 파일로 적용</h4>
      <div className='box1'>
        <div>근검절약</div>
      </div>
    </>
  );
}
