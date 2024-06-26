import './services.css'
import VideoPlayer from '../../components/VideoPlayer';
import EmeraldBanner from '../../Assets/esmeraldaban.png';
import Ametists from '../../Assets/ametistas.png'


function Services() {
  const youtubeId = 'soE2oGk9pMo';
  const storeUrl = 'https://lapidacaofacetar.mercadoshops.com.br/lista/joias-relogios/'

  
  return (
    <div className='services'>
      <div className='services-body'>
        <div className='services-content'>
          <h2>Serviços</h2>
        <ul>
          <li><p>Lapidação de pedras naturais, sintéticas e resina.</p></li>
          <li><p>Recuperação de pedras danificadas.</p></li>
          <li><p>Serviço de furos em pedras.</p></li>
          <li><p>Desevolvimento de produtos(criação de modelos em pedras).</p></li>
          <li><p>Atendimento personalizado à designers(e público em geral).</p></li>
        </ul>
        <span>Serviços com colaboradores</span>
        <ul>
          <li><p>Recuperação de jóias.</p></li>
          <li><p>Análise de pedras.</p></li>
          <li><p>Gravação a laser em alto e baixo relevo.</p></li>
        </ul>
        </div>
        <div className='services-movie'>
        <h2>Acessorias</h2>
        <ul>
          <li><p>Acessoria para compra de pedras.</p></li>
          <li><p>Acessoria para partilha de jóias familiares.</p></li>
        </ul>
          <div className="video-container">

          </div>
        </div>
      </div>
      <div className='services-store'>
        <a href={storeUrl} target="_blank" rel="noopener noreferrer">
          <img src={EmeraldBanner} alt="Esmeralda Natural/Conheça nossa loja virtual" />
        </a>
      </div>
    </div>
  )
}

export default Services;