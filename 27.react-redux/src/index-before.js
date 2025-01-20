// Redux ver1. 1가지 상태 관리

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: reducer });

// [2] reducer 함수 만들기!
// state의 초기값은 매개변수의 default 값 (numberState)
function reducer(numberState = 1, action) {
  console.log('action', action); // 객체 형태 {type: '증가'}
  if (action.type === '증가') {
    // return 변경사항
    return numberState + 1;
  } else if (action.type === '감소') {
    return numberState - 1;
  } else {
    return numberState;
  }
  return numberState;
}

// [1] 미리 만들어둔 store 전달해야함
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
