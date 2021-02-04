import logo from './logo.svg';
import './App.css';
import React from 'react';

//sounds 
import heater1 from "./audio/Heater-1.mp3";
import heater2 from "./audio/Heater-2.mp3";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.hitDrumButton = this.hitDrumButton.bind(this);

  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyPress);
  }

  /**
   * 
   * @param {KeyboardEvent} evt 
   */
  keyPress(event) {
    const key = event.code.substring(3); // "a", "1", "Shift", etc.
    if (key === "Q") {
      let audioElement = document.getElementById('Q');
      audioElement.play();
    }
    else if (key === "W") {
      let audioElement = document.getElementById('W');
      audioElement.play();
    }
  }

  /**
   * 
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  hitDrumButton(event) {
    var target = event.target;
    var element = document.getElementById(target.id);

    var audioElement = element.firstElementChild;
    audioElement.play();
  }


  render() {
    return (
      <div id="drum-machine" className="App" >
        <p id="display"></p>

        <button id="Heater-1" className="drum-pad" onClick={this.hitDrumButton}>
          <audio id="Q" src={heater1} />
          Q
        </button>

        <button id="Heater-2" className="drum-pad" onClick={this.hitDrumButton}>
          <audio id="W" src={heater2} />
          W
        </button>

      </div>
    );
  }

}

export default App;
