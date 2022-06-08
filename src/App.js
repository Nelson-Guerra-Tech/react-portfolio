import ReactDOM from 'react-dom/client';

// import css
import './index.css';

// importing svgs
import wavingHand from './images/waving-hand.png';
import globe from './images/globe.png';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <div className='heading-container'>
          <h1>
            <img
              className='waving-hand wave'
              src={wavingHand}
              alt='waving-hand'
            ></img>
            Hello, I'm <span className='heading-name'> Nelson</span>!
          </h1>
          <p>
            A <span className='heading-name'>Software Developer </span>with a
            Bachelor's in Information Technolgy, based out of Georgia
            <img className='globe' src={globe} alt='globe'></img>
            <span className='heading-name'>I design & develop</span> cool things
            for the web.
          </p>
          <button className='btn'>View Projects</button>
        </div>
      </div>
    </div>
  );
}

export default App;
