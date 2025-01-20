// boolean 형 State

const initialState = false;

export const isDataReducer = (state = initialState, action) => {
  console.log(action); // { type: 'isData/CHANGE' }

  if (action.type === 'isData/CHANGE') {
    return !state;
  }

  return state; // 기존 State 유지
};
