import './App.css';
import Terminal from './Components/Terminal/Terminal';
import swiss_post_logo1 from "../public/Swiss_Post_logo.png";
import swiss_post_logo2 from "../public/Schweizerische_Post_Logo.png";
import swiss_post_plane1 from './../public/swiss-plane1.png';
import swiss_post_plane3 from '../public/swiss-plane3.png';
import swiss_post_plane4 from '../public/swiss-plane4.png';
import swiss_post_plane5 from '../public/swiss-plane5.png';
import ImageSlider from './Components/Slider/Slider';
import Concept from './Components/Concepts/Concept';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={swiss_post_logo2} alt='Swiss Post Logo' />
        <h2>Ready to take off into the world of IT innovation?</h2>
      </header>
      <main>
        <ImageSlider />
        <div className='name-and-concept'>
          <Terminal />

          <section className='grid-and-description'>
            <div className="image-grid">
              <div className="image">
                <img src={swiss_post_plane1} alt="Image 1" />
              </div>
              <div className="image">
                <img src={swiss_post_plane4} alt="Image 2" />
              </div>
              <div className="image">
                <img src={swiss_post_plane3} alt="Image 3" />
              </div>
              <div className="image">
                <img src={swiss_post_plane5} alt="Image 4" />
              </div>
            </div>

            <div className='description'>
              <Concept />
            </div>
          </section>
        </div>

      </main>
      <footer>
        <img src={swiss_post_logo1} alt='Swiss Post Logo' />
        <p>&copy; 2024 Swiss Post ICT Academy</p>
      </footer>
    </div>
  );
}

export default App;
