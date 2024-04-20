import { useNavigate } from 'react-router-dom';
import './header.css'
import faceLogo from '../../Assets/fb_black.png';
import instaLogo from '../../Assets/insta_black.png';
import emailLogo from '../../Assets/email_black.png';
import whatsLogo from '../../Assets/whats_black.png';
import facetarLogo from '../../Assets/facetar_logo.png';

function Header() {
  const navigate = useNavigate();
const fbLink = 'https://facetar.github.io/'

  return (
    <div>
      <div className='top-header'>
        <div className='header-contacts'>
        <a href={fbLink} target="_blank" rel="noopener noreferrer">
          <img className='fb_logo' src={faceLogo} alt="" />
        </a>
        <a href={fbLink} target="_blank" rel="noopener noreferrer">
          <img className='insta_logo' src={instaLogo} alt="" />
        </a>
        <a href={fbLink} target="_blank" rel="noopener noreferrer">
          <img className='email_logo' src={emailLogo} alt="" />
        </a>
        <a href={fbLink} target="_blank" rel="noopener noreferrer">
          <img className='whats_logo' src={whatsLogo} alt="" />\
        </a>
        </div>
      </div>
      <div className='header-bottom'>
        <div className='logo-area'>
        <div className='header-logo'>
          <img className='logo' src={facetarLogo} alt="" />
        </div>
        <div className='logo-title'>
          <span>Lapidação Facetar</span>
        </div>
        </div>
        <div className='header-links'>
          <button onClick={() => navigate('/')}><span>Home</span></button>
          <button onClick={() => navigate('/serviços')}><span>Serviços</span></button>
          <button onClick={() => navigate('/sobre_nos')}><span>Sobre nós</span></button>
          <button onClick={() => navigate('/contatos')}><span>Contatos</span></button>
        </div>
      </div>
    </div>
  )
}

export default Header;