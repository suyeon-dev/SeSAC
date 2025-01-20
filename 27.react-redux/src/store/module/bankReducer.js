// action type의 상수화
const WITHDRAW = 'bank/WITHDRAW';
const DEPOSIT = 'bank/DEPOSIT';

// action 리턴 함수
export const deposit = (payload) => ({
  type: 'bank/DEPOSIT',
  payload: payload,
});
export const withdraw = (payload) => ({
  type: 'bank/WITHDRAW',
  payload,
});

const initialState = 0;

// reducer
export const bankReducer = (state = initialState, action) => {
  console.log('bank action', action);

  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
