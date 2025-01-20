// [todo2] store/module에서 만들어준 여러 개의 Reducer를 통합

// store/ index.js : 여러 개의 reducer를 통합하는 역할

import { combineReducers } from '@reduxjs/toolkit';
import { isDataReducer } from './module/isDataReducer';
import { counterReducer } from './module/counterReducer';
import { bankReducer } from './module/bankReducer';

const rootReducer = combineReducers({
  isData: isDataReducer,
  count: counterReducer,
  bank: bankReducer,
  // 만약 전역 관리 State가 추가되면 이곳에도 추가
  // Key값: useSelector를 이용해 가져오는 값
});

// [todo2-2] 내보내기 -> src/ index.js에서 쓰일 예정
export default rootReducer;
