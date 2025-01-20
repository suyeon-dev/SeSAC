const initialState = {
  balance: 0,
  depositAmount: '',
  withdrawAmount: '',
};

export const bankReducer = (state = initialState, action) => {
  console.log('bank action', action);

  if (action.type === 'bank/DEPOSIT') {
    return state;
  } else if (action.type === 'bank/WITHDRAW') {
    return state;
  } else {
    return state; // 기존 상태 유지
  }
};
