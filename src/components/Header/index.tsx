import { useNavigate } from 'react-router-dom';
import './header.css'
import faceLogo from '../../Assets/fb_black.png';
import instaLogo from '../../Assets/insta_black.png';
import emailLogo from '../../Assets/email_black.png';
import whatsLogo from '../../Assets/whats_black.png';
import facetarLogo from '../../Assets/facetar_logo.png';

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='top-header'>
        <div className='header-contacts'>
          <img className='fb_logo' src={faceLogo} alt="" />
          <img className='insta_logo' src={instaLogo} alt="" />
          <img className='email_logo' src={emailLogo} alt="" />
          <img className='whats_logo' src={whatsLogo} alt="" />
        </div>
      </div>
      <div className='header-bottom'>
        <div className='header-logo'>
          <img className='logo' src={facetarLogo} alt="" />
        </div>
        <div className='logo-title'>
          <span>Lapidacao Facetar</span>
        </div>
        <div className='header-links'>
          <button onClick={() => navigate('/')}><span>Home</span></button>
          <button onClick={() => navigate('/sobre_nos')}><span>Sobre Nos</span></button>
          <button onClick={() => navigate('/contato')}><span>Contato</span></button>
        </div>
      </div>
    </div>
  )
}

export default Header;