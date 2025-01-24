import { Route, Routes } from 'react-router-dom';
import Practice from './pages/Practice';
import Lecture from './pages/Lecture';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lecture' element={<Lecture />} />
        <Route path='/practice' element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App;
