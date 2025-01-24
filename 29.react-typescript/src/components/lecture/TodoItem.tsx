import { TodoItemInterface } from '../../types/interface';

interface Props {
  todo: TodoItemInterface;
  // 함수의 타입 작성하기
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <input type='checkbox' onChange={() => toggleComplete(todo.id)} />
      <span>{todo.text}</span>
    </li>
  );
}
