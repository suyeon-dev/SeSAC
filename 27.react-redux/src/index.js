import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// [Todo3] store 설정
// module/ index.js에서 통합한 root reducer를 value로 전달
const store = configureStore({ reducer: rootReducer });

// [Todo4] App 컴포넌트의 자식 컴포넌트 모두에서 사용 가능하도록
// store Props로 store 전달
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
