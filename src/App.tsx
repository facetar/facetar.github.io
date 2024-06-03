import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
