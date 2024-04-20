import './services.css'
import VideoPlayer from '../../components/VideoPlayer';
import AmetistBanner from '../../Assets/ametistaban.png'


function Services() {
  const youtubeId = 'soE2oGk9pMo';
  const storeUrl = 'https://facetar.github.io/'

  return (
    <div className='services'>
      <div className='services-body'>
        <div className='services-content'>
          <h2>Serviços</h2>
        <ul>
          <li><p>Lapidação de pedras naturais, sintétcias e resina.</p></li>
          <li><p>Recuperação de pedras danificadas.</p></li>
          <li><p>Serviço de furos em presas.</p></li>
          <li><p>Desevolvimento de produtos(criação de modelos em pedras).</p></li>
          <li><p>Atendimento perzonalizado à designers(e público em geral).</p></li>
        </ul>
        </div>
        <div className='services-movie'>
          <div className="video-container">
            <VideoPlayer videoId={youtubeId} />
          </div>
        </div>
      </div>
      <div className='services-store'>
        <a href={storeUrl} target="_blank" rel="noopener noreferrer">
          <img src={AmetistBanner} alt="Esmeralda Natural/Conheça nossa loja virtual" />
        </a>
      </div>
    </div>
  )
}

export default Services;