// 함수의 매개변수의 타입이니까 밖에서!
interface Props {
  name: string;
}

// 구조분해할당 사용하여 props 객체에서 name만 추출
export function PropsType1({ name }: Props) {
  return (
    <>
      <h2>hello {name}</h2>
    </>
  );
}

// ----------------------------
interface Square {
  // 모든 key는 string이고, value도 string이어야 함
  [key: string]: string;
}

// props 객체를 매개변수로 받아, div 스타일을 동적으로 설정하는 컴포넌트
export function PropsType2(props: Square) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };

  return <div style={divStyle}></div>;
}

// ----------------------------
interface Square2 {
  width: string;
  height: string;
  color?: string;
  text: string;
}

// 구조분해 할당을 사용하여 props 객체에서 width, height, color, text 추출
export function PropsType3(props: Square2) {
  const { width, height, color, text } = props;
  const divStyle = {
    width: `${width}`,
    height: `${height}`,
    // ? 처리된 속성에 대해 예외 처리 해주어야함
    backgroundColor: `${color ? color : 'pink'}`,
    lineHeight: `${height}`,
    // textAlign: 'center',
  };

  return <div style={divStyle}>{text}</div>;
}
