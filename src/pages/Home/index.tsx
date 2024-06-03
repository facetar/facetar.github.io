import { useNavigate } from 'react-router-dom';
import './home.css';
import Services from '../Services';
import VideoPlayer from '../../components/VideoPlayer';
import About from '../About';
import Contact from '../Contact';


function Home() {
  const navigate = useNavigate();
  const youtubeId = 'qcPTIbG7KPk';

  return (
    <div className='home' id='home'>
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
              <button onClick={() => navigate('/contatos')}>
                <span>Entre em contato</span>
              </button>
        </div>
        <div className='home-movie'>
        <div className='video-container'>
            <VideoPlayer videoId={youtubeId} />
          </div>
        </div>
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
