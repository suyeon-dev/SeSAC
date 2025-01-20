const initialState = 1;

// action을 리턴하는 함수 (지난 시간 문자열 상수 관리)
// export const countPlus = (ddd) => {
//     return {type: 'count/INCREMENT', payload: 'ddd'}
// }
export const countPlus = () => {
  return { type: 'count/INCREMENT' };
};
export const countMinus = () => {
  return { type: 'count/DECREMENT' };
};

// [todo 1] src/store/module 개별적인 전역 state 선언 -> reducer 생성
// reducer 선언 = state 만들기
export const counterReducer = (state = initialState, action) => {
  console.log('coutn action', action);

  if (action.type === 'count/INCREMENT') {
    return state + 1;
  } else if (action.type === 'count/DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
};
