interface Props {
  // React 컴포넌트, JSX 요소, 문자열 등 모든 노드를 허용
  children: React.ReactNode; // <div></div>
}

export default function Container({ children }: Props) {
  return <div style={{ border: '1px dotted green' }}>{children}</div>;
}
