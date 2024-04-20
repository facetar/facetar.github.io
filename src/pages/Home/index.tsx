import './home.css'
import VideoPlayer from '../../components/VideoPlayer';
import StoreBanner from '../../Assets/esmeraldabanner2.png'

function Home() {
  const youtubeId = 'qcPTIbG7KPk';
  const storeUrl = 'https://facetar.github.io/'

  return (
    <div className='home'>
      <div className='home-body'>
        <div className='home-content'>
          <h2>Lapidação Facetar</h2>
          <p>Breve texto descritivo, breve texto descritivo, breve texto descritivo
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo.
          </p>
        </div>
        <div className='home-movie'>
          <VideoPlayer videoId={youtubeId} />
        </div>
      </div>
      <div className='home-store'>
        <a href={storeUrl} target="_blank" rel="noopener noreferrer">
          <img src={StoreBanner} alt="Esmeralda Natural/Conheça nossa loja virtual" />
        </a>
      </div>
    </div>
  )
}

export default Home;