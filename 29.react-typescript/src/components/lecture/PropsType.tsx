// 함수의 매개변수의 타입이니까 밖에서!
interface Props {
  name: string;
}

// 구조분해할당
export function PropsType1({ name }: Props) {
  return (
    <>
      <h2>hello {name}</h2>
    </>
  );
}

// ------
interface Square {
  [key: string]: string;
}

export function PropsType2(props: Square) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };

  return <div style={divStyle}></div>;
}

interface Square2 {
  width: string;
  height: string;
  color?: string;
  text: string;
}
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
