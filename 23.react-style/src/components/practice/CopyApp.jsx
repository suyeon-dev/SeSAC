import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const RootDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: #282c34;
  m
`;

const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }

`;

const AppLogo = styled.img`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 1s linear infinite;
`;

const AppIntro = styled.p`
  color: white;
`;

const MyA = styled.div`
  color: #61dafb;
`;

export default function CopyApp() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt='app' />
        <AppIntro>
          Edit <code>src/App.js</code> and save to reload.
        </AppIntro>
        <MyA
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
