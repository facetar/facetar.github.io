import './home.css'

function Home() {
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
        <iframe 
            width="540" 
            height="315" 
            src="https://www.youtube.com/watch?v=qcPTIbG7KPk" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home;