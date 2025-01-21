import React, { useReducer, useState } from 'react';

// 문자열 상수 관리 -> 별도 파일 분리
const TODO_ACTION_TYPES = {
  add: 'add',
  delete: 'delete',
  check: 'check',
};

// [3] reducer: 현재 state와 action 값 전달받아 새로운 state 반환
const reducer = (prevState, action) => {
  console.log('prevState', prevState);

  switch (action.type) {
    case TODO_ACTION_TYPES.add:
      return [...prevState, action.payload];
    // ---수정 전 return action.payload

    case TODO_ACTION_TYPES.delete:
      return prevState.filter((item) => item.id !== action.payload);

    case TODO_ACTION_TYPES.check:
      return prevState.map((item) =>
        item.id === action.payload
          ? { ...item, isChecked: !item.isChecked }
          : item
      );
    default:
      return prevState;
  }
};

const TodoApp = () => {
  // 상태 관리
  const [input, setInput] = useState('');

  //[1] reducer 정의 [현재 상태, 액션 발생 함수] = useReducer(상태 업데이트 함수, 상태 초기값)
  const [todo, dispatch] = useReducer(reducer, []);

  // 추가 이벤트 핸들러
  const handleAdd = () => {
    if (input) {
      dispatch({
        type: TODO_ACTION_TYPES.add,
        // 수정 전: payload: input
        payload: { id: Date.now(), text: input },
      });
      setInput('');
    } else alert('할 일을 입력해주세요');
  };

  //   const handleDelete = (id) => {
  //     dispatch({ type: TODO_ACTION_TYPES.delete, payload: id });
  //   };

  //   const handleCheck = (id) => {
  //     dispatch({ type: TODO_ACTION_TYPES.check, payload: id });
  //   };

  const toggleStyle = (isChecked) => ({
    cursor: 'pointer',
    textDecoration: isChecked ? 'line-through' : 'none',
    color: isChecked ? 'gray' : 'black',
  });

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={input}
        placeholder='Add a new todo'
        onChange={(e) => setInput(e.target.value)}
      />
      {/* [2] dispatch 함수로 action 값 전달 */}
      <button onClick={handleAdd}>Add</button>

      <ul>
        {/* Todo 목록 */}
        {todo.map((item) => (
          <li
            key={item.id}
            onClick={() =>
              dispatch({ type: TODO_ACTION_TYPES.check, payload: item.id })
            }
            style={toggleStyle(item.isChecked)}
          >
            {item.text}
            <button
              onClick={() =>
                dispatch({ type: TODO_ACTION_TYPES.delete, payload: item.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
