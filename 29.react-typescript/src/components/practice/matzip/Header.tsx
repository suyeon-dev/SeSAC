import { SetStateAction } from 'react';
import styled from 'styled-components';

const MHeader = styled.header`
  background-color: beige;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

// txtColor
interface TextProps {
  txtColor: boolean;
}

const Div = styled.div<TextProps>`
  width: 30%;
  font-size: 2rem; // 20*2 = 40px
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: pink;
  }

  color: ${(props: TextProps) => (props.txtColor ? 'red' : 'black')};
`;

interface Props {
  mapo: boolean;
  gangdong: boolean;
  dobong: boolean;
  setMapo: (isShow: boolean) => void;
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  setGangdong: React.Dispatch<SetStateAction<boolean>>;
}

export default function Header(props: Props) {
  const { mapo, gangdong, dobong, setDobong, setGangdong, setMapo } = props;

  const setState = (func: (isShow: boolean) => void): void => {
    setDobong(false);
    setGangdong(false);
    setMapo(false);
    func(true); //받아오는 함수만 True 처리
  };
  return (
    <MHeader>
      <Div onClick={() => setState(setGangdong)} txtColor={gangdong}>
        강동구
      </Div>
      <Div onClick={() => setState(setMapo)} txtColor={mapo}>
        마포구
      </Div>
      <Div onClick={() => setState(setDobong)} txtColor={dobong}>
        도봉구
      </Div>
    </MHeader>
  );
}
