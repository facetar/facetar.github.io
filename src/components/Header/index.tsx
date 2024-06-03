import './header.css'
import faceLogo from '../../Assets/fb_black.png';
import instaLogo from '../../Assets/insta_black.png';
import emailLogo from '../../Assets/email_black.png';
import whatsLogo from '../../Assets/whats_black.png';
import facetarLogo from '../../Assets/facetar_logo.png';

function Header() {

const fbLink = 'https://www.facebook.com/facetar'
const instaLink = 'https://www.instagram.com/lapidacao_facetar'
const emailLink = 'mailto:adm@facetar.com.br';
const whatsappNumber = '5511998653311';
const whatsappLink = `whatsapp://send?phone=${whatsappNumber}`;

const handleNavigation = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerElement = document.querySelector('.header') as HTMLElement;
    const headerHeight = headerElement.offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: 'smooth'
    });
  }
};

  return (
    <div className='header'>
      <div className='top-header'>
        <div className='header-contacts'>
        <a href={fbLink} target="_blank" rel="noopener noreferrer">
          <img className='fb_logo' src={faceLogo} alt="" />
        </a>
        <a href={instaLink} target="_blank" rel="noopener noreferrer">
          <img className='insta_logo' src={instaLogo} alt="" />
        </a>
        <a href={emailLink} target="_blank" rel="noopener noreferrer">
          <img className='email_logo' src={emailLogo} alt="" />
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
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
        <button onClick={() => handleNavigation('home')}><span>Home</span></button>
        <button onClick={() => handleNavigation('services')}><span>Serviços</span></button>
          <button onClick={() => handleNavigation('about')}><span>Sobre nós</span></button>
          <button onClick={() => handleNavigation('contact')}><span>Contatos</span></button>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default Header;