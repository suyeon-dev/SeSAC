import {
  PropsType1,
  PropsType2,
  PropsType3,
} from '../components/lecture/PropsType';

import Container from '../components/lecture/Container';
import SetText from '../components/lecture/SetText';
import EventObj from '../components/lecture/EventObj';
import TodoList from '../components/lecture/TodoList';

export default function Lecture() {
  return (
    <main>
      <PropsType1 name='suyeon' />
      <PropsType2 width='100px' color='red' height='100px' />
      <PropsType3 width='100px' height='50px' text='hi' />
      <PropsType3 width='100px' height='50px' text='hi' color='red' />

      <Container>
        <SetText />
        <EventObj />
        <TodoList />
      </Container>
    </main>
  );
}
