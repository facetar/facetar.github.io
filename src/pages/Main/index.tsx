import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './main.css'

function Main() {
  return (
    <>
      <Header />
      <hr></hr>
      <div className='outlet'>
      <Outlet />
      <Footer />
      </div>
    </>
  )
}

export default Main;