import { ClassProps, ClassProps2 } from './components/ClassProps';
import ClassState from './components/ClassState';
import Counter from './components/Counter';
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from './components/FunctionProps';
import FunctionState from './components/FunctionState';
import PracticeClass, { PracticeState } from './components/practice/State';
import SyntheticEvent from './components/SyntheticEvent';
import HandlerEx from './components/ex/HandlerEx';
import EventHandling from './components/practice/EventHandling';
import ShowText from './components/practice/ShowText';
import Emoji from './components/practice/Emoji';
import Member from './components/practice/PororoObj';
import Fruits from './components/practice/Fruits';
import FruitsSol from './components/practice/FruitsSol';
import PropsMap from './components/PropsMap';
import PropsMap2 from './components/PropsMap2';
import Alphabet from './components/Alphabet';
import RegisterUser from './components/practice/RegisterUser';
import Guestbook from './components/Guestbook';
import GuestbookSol from './components/practice/GuestbookSol';

function App() {
  const arr = [
    { name: 'peach', krPrice: 10000, number: 5 },
    { name: 'strawberry', krPrice: 10000, number: 1 },
    { name: 'pear', krPrice: 5000, number: 3 },
    { name: 'apple', krPrice: 20000, number: 15 },
  ];
  return (
    <div>
      {/* <h2>Props 사용해보기</h2>
      <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name='도구리' color='pink' nickname='너구리' />
      <ClassProps2
        name='루피'
        color='pink'
        nickname='잔망루피'
        // fontColor='blue'
      />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name='사과🍎' number={5} krPrice={10000} />
      <FunctionProps2 name='도구리 담요' number={1} krPrice={50000} />
      <FunctionProps3 name='루피 망토' number={2} krPrice={15000} />
      <FunctionProps4 name='애플 매직패드' number={1} krPrice={160000}>
        <span style={{ color: 'red' }}>나는 함수형4번의 자식이다!!</span>
      </FunctionProps4>
      <FunctionProps4 name='애플 매직패드'>
        <span style={{ color: 'red' }}>나는 함수형4번의 자식이다!!</span>
      </FunctionProps4>

      <h2>State 사용해보기</h2>
      <h3>클래스형 state</h3>
      <ClassState />
      <h3>함수형 state</h3>
      <FunctionState />

      <h2>과제1 state</h2>
      <PracticeClass />
      <PracticeState /> */}

      {/* <h2>Event</h2>
      <SyntheticEvent />
      <Counter />

      <hr></hr>
      <h2>이벤트 핸들링 실습1</h2>
      <HandlerEx />
      <h2>이벤트 핸들링 실습2</h2>
      <EventHandling />
      <h2>실습3</h2>
      <ShowText />
      <h2>추가실습1</h2>
      <Emoji />
      <h2>추가실습2</h2>
      <Member />
      <h2>선택과제</h2>
      <Fruits />
      <h2>선택과제-sol</h2>
      <FruitsSol /> */}

      {/* map 사용해보기 */}
      {/* props 이름 = app.js에서 선언한 배열 이름 */}
      {/* <PropsMap arr={arr} /> */}
      {/* udefined에 대한 연산 -> Err */}
      {/* <PropsMap /> */}
      {/* <PropsMap2 arr={arr} /> */}
      {/* <PropsMap2 /> */}

      {/* map 실습 */}
      {/* <Alphabet /> */}

      {/* ----- map, filter 과제 ----- */}
      <RegisterUser />
      <Guestbook />
      <GuestbookSol />
    </div>
  );
}

export default App;
