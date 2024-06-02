import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './home.css';
import VideoPlayer from '../../components/VideoPlayer';
import EmeraldBanner from '../../Assets/esmeraldaban.png';
import Services from '../Services';

function Home() {
  const navigate = useNavigate();
  const youtubeId = 'qcPTIbG7KPk';
  const storeUrl = 'https://lapidacaofacetar.mercadoshops.com.br/lista/joias-relogios/';
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='home'>
      <div className='home-body'>
        <div className='home-content'>
          <h2>Lapidação Facetar</h2>
          <div className='home-text'>
          <p>Especialistas em transformar pedras brutas em jóias deslumbrantes, temos 
            profundo conhecimento de todo processo, desde a extração e lapidação até a 
            criação e execução da peça final. Nos permitindo um serviço completo e 
            personalizado, garantindo excelência, qualidade, eficiência e o melhor 
            custo-benefício em cada projeto..
          </p>
          </div>
          <button onClick={() => navigate('/serviços')}><span>Nossos serviços</span></button>
        </div>
        <div className='home-movie'>
          <div className={`video-container ${showContent ? 'visible' : ''}`}>
            <VideoPlayer videoId={youtubeId} />
          </div>
        </div>
      </div>
      <div className='home-store'>
        <a href={storeUrl} target="_blank" rel="noopener noreferrer">
          <img src={EmeraldBanner} alt="Esmeralda Natural/Conheça nossa loja virtual" />
        </a>
      </div>
      <Services />
    </div>
  );
}

export default Home;
