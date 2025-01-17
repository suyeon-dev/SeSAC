import CustomHook from './components/CustomHook';
import UseCallbackEx1 from './components/UseCallbackEx1';
import UseCallbakcEx2 from './components/UseCallbakcEx2';
import UseMemo1 from './components/UseMemo1';
import UseMemoObj from './components/UseMemoObj';
import UseReducer from './components/UseReducer';
import useTitle from './hooks/useTitle';
import Form from './components/Form';
import FormPractice from './components/practice/FormPractice';

function App() {
  useTitle('hook 배워보기');

  return (
    <div>
      {/* 강의 노트 */}
      {/* <UseMemo1 />
      <UseMemoObj /> 
      
      <UseCallbackEx1 />
      <UseCallbakcEx2 />
      <UseReducer />

      */}
      <CustomHook />
      <Form />

      {/* 실습 */}
      {/* <Form /> */}

      {/* 과제 */}
      <FormPractice />

      {/* 자습 */}
    </div>
  );
}

export default App;
