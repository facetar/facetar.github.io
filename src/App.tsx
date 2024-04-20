import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} >
        <Route path='/' element={<Home />} />
        <Route path='/sobre_nos' element={<About />} />
        <Route path='/serviços' element={<Services />} />
        <Route path='/contatos' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
