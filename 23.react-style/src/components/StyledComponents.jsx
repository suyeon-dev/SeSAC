import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledContainer = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0;
`;

const H4TItle = styled.h4`
  background-color: yellowgreen;

  /* 반응형 설정 780 이하 */
  /* - 기기방향 설정 orientation */
  /* - 세로 방향 */
  @media screen and (max-width: 780px) and (orientation: portrait) {
    color: green;
  }
  /* 가로 방향 */
  @media screen and (max-width: 780px) and (orientation: landscape) {
    color: red;
  }
`;

const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;

// 애니메이션 (import 필요)
const rotate = keyframes`
    0%{
        transform: rotate(0)
    }
    50%{
        transform: rotate(180deg);
        background-color: aliceblue;
    }
    100%{
        transform: rotate(360deg);
    }
`;

// props 사용, hover, animation
const Child = styled.span`
  color: red;

  &:hover {
    cursor: pointer;
    /* color: white; */
    color: ${(props) => (props.color ? props.color : 'wheat')};
    background-color: ${(props) => (props.bg ? props.bg : 'yellow')};

    /* animation: name duration iteration-count; */
    animation: ${rotate} 1s linear infinite;
  }
`;

export default function StyledComponents() {
  return (
    <StyledContainer>
      <H4TItle>Styled Components 이용</H4TItle>
      <ParentDiv>
        <Child color='red'>element1</Child>
        <Child color='blue' bg='skyblue'>
          element2
        </Child>
        <Child color=''>element3</Child>
      </ParentDiv>
    </StyledContainer>
  );
}
