import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  background-color: aliceblue;
  height: 70px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// 컴포넌트에 스타일 적용
const MyLink = styled(Link)`
  color: green;
  &:hover {
    color: black;
  }
`;

const Li = styled.li`
  margin-left: 1rem;
`;

export default function PracticeHeader() {
  const style = { margin: '4px' };
  return (
    <Nav>
      <Ul>
        <Li style={style}>
          <MyLink to='/student/santa'>산타🎅</MyLink>
        </Li>
        <Li style={style}>
          <MyLink to='/student/bebe'>베베🐧</MyLink>
        </Li>
        <Li style={style}>
          <MyLink to='/student/new?name=suyeon'>searchParams</MyLink>
        </Li>
      </Ul>
    </Nav>
  );
}
