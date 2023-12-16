import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} >
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
