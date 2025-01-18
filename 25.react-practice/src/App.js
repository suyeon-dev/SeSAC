import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentPage from './pages/StudentPage';
import './style/common.scss';

function App() {
  return (
    <>
      {/* 라우팅 처리 */}
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/student/santa' element={<StudentPage name='santa' />} />
        <Route path='/student/bebe' element={<StudentPage name='bebe' />} />
        <Route path='/student/new' element={<StudentPage name='new' />} />
      </Routes>
    </>
  );
}

export default App;
