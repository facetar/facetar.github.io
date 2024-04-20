import './about.css'
import Esmeralda from '../../Assets/esmeralda.png'

function About() {
  return (
    <div className='about'>
      <div className='about-body'>
        <div className='about-content'>
          <h2>Sobre nós</h2>
            <p>Breve texto descritivo, breve texto descritivo, breve texto descritivo
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo,
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo.
            </p>
        </div>
        <div className='about-imgs'>
          <img src={Esmeralda} alt="Esmeralda natural lapidada" />
        </div>
      </div>
    </div>
  );
}

export default About;