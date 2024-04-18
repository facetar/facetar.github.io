import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import './main.css'

function Main() {
  return (
    <>
      <Header />
      <hr></hr>
      <div className='outlet'>
      <Outlet />
      </div>
    </>
  )
}

export default Main;