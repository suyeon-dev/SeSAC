import { createContext } from 'react';

// provider를 안 썼을 경우
// props로 value가 전달되지 않은 경우
const defaultUser = {
  name: '홍길동',
  setName: () => {},
};

export const UserContext = createContext(defaultUser);
