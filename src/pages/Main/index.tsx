import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import './main.css'

function Main() {
  return (
    <>
      <Header />
      <h2>Main1</h2>
      <Outlet />
    </>
  )
}

export default Main;