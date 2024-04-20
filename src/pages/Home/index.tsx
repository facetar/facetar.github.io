import './home.css'
import VideoPlayer from '../../components/VideoPlayer';
import EmeraldBanner from '../../Assets/esmeraldaban.png'

function Home() {
  const youtubeId = 'qcPTIbG7KPk';
  const storeUrl = 'https://facetar.github.io/'

  return (
    <div className='home'>
      <div className='home-body'>
        <div className='home-content'>
          <h2>Lapidação Facetar</h2>
          <p>Braaeve tadsdextxto descritivo, breve texto descritivo
          breve s dsadescrdssaddasdasdsaditivo, breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve tsdexto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo.
          </p>
        </div>
        <div className='home-movie'>
          <div className="video-container">
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
  )
}

export default Home;