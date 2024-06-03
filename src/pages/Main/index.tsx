import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './main.css'

function Main() {
  return (
    <div className='main'>
      <Header />
      <div className='outlet'>
      <Outlet />
      <Footer />
      </div>
    </div>
  )
}

export default Main;