import { useNavigate } from 'react-router-dom';
import './home.css';
import Services from '../Services';
import VideoPlayer from '../../components/VideoPlayer';


function Home() {
  const navigate = useNavigate();
  const youtubeId = 'qcPTIbG7KPk';

  return (
    <div className='home'>
      <div className='home-body'>
        <div className='home-content'>
          <h2>Lapidação Facetar</h2>
          <div className='home-text'>
          <p>Especialistas em transformar pedras brutas em jóias deslumbrantes. Temos 
            profundo conhecimento de todo o processo, desde a extração e lapidação até a 
            criação e execução da peça final. Oferecemos um serviço completo e 
            personalizado, garantimos excelência, qualidade, eficiência e o melhor 
            custo-benefício em cada projeto.
          </p>
          </div>
          <button onClick={() => navigate('/contatos')}><span>Entre em contato</span></button>
        </div>
        <div className='home-movie'>
        <div className='video-container'>
            <VideoPlayer videoId={youtubeId} />
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}

export default Home;
