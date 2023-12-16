import { useNavigate } from 'react-router-dom';
import './header.css'

function Header() {
  const navigate = useNavigate();
  return (
    <div>
       <h2>Header</h2>
       <button onClick={() => navigate('/')}>Home</button>
       <button onClick={() => navigate('/contato')}>Contact</button>
    </div>
  )
}

export default Header;