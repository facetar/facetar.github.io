import React, { useState, useEffect } from 'react';
import './home.css';
import VideoPlayer from '../../components/VideoPlayer';
import EmeraldBanner from '../../Assets/esmeraldaban.png';

function Home() {
  const youtubeId = 'qcPTIbG7KPk';
  const storeUrl = 'https://facetar.github.io/';
  
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
          <p>Breve texto descritivo, breve texto descritivo
          breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo.
          </p>
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
    </div>
  );
}

export default Home;
