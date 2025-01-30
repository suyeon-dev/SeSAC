interface Props {
  children: React.ReactNode;
}

export default function PostContainer({ children }: Props) {
  return (
    <>
      <header
        style={{
          backgroundColor: '#77a4ff',
          height: '90px',
          color: 'white',
        }}
      >
        <h2>💌 Post List</h2>
      </header>

      <main>{children}</main>

      <footer style={{ backgroundColor: '#77a4ff', height: '90px' }}>
        Footer
      </footer>
    </>
  );
}
