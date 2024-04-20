import './about.css'
import Emerald from '../../Assets/PNEM1012 (2)_edited.png'

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
          breve texto descritivo, breve texto descritivo, breve texto descritivo, breve texto descritivo.
            </p>
        </div>
        <div className='about-imgs'>
          <img src={Emerald} alt="Esmeralda natural lapidada" />
        </div>
      </div>
    </div>
  );
}

export default About;