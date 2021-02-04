import logo from './logo.svg';
import './App.css';
import React from 'react';

//sounds 
import heater1 from "./audio/Heater-1.mp3";
import heater2 from "./audio/Heater-2.mp3";
import heater3 from "./audio/Heater-3.mp3";
import heater4 from "./audio/Heater-4_1.mp3";
import heater6 from "./audio/Heater-6.mp3";
import kickNHat from "./audio/Kick_n_Hat.mp3";
import disco from "./audio/Dsc_Oh.mp3";
import cev from "./audio/Cev_H2.mp3"
import rp4 from "./audio/RP4_KICK_1.mp3"

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
    //Have to remove the "Key" prefix
    const key = event.code.substring(3); // "a", "1", "Shift", etc.
    if (key === "Q") {
      let audioElement = document.getElementById('Q');
      audioElement.play();
    }
    else if (key === "W") {
      let audioElement = document.getElementById('W');
      audioElement.play();
    }
    else if (key === "W") {
      let audioElement = document.getElementById('W');
      audioElement.play();
    }
    else if (key === "E") {
      let audioElement = document.getElementById('E');
      audioElement.play();
    }
    else if (key === "A") {
      let audioElement = document.getElementById('A');
      audioElement.play();
    }
    else if (key === "S") {
      let audioElement = document.getElementById('S');
      audioElement.play();
    }
    else if (key === "D") {
      let audioElement = document.getElementById('D');
      audioElement.play();
    }
    else if (key === "Z") {
      let audioElement = document.getElementById('Z');
      audioElement.play();
    }
    else if (key === "X") {
      let audioElement = document.getElementById('X');
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
        <button id="Heater-3" className="drum-pad" onClick={this.hitDrumButton}>
          <audio id="E" src={heater3} />
          E
        </button>
        <button id="Heater-4_1" className="drum-pad" onClick={this.hitDrumButton}>
          <audio id="A" src={heater4} />
          A
        </button>
        <button id="Kick_n_Hat" className="drum-pad" onClick={this.hitDrumButton}>
          <audio id="S" src={kickNHat} />
          S
        </button>
        <button id="Dsc_Oh" className="drum-pad" onClick={this.hitDrumButton}>
          <audio id="D" src={disco} />
          D
        </button>
        <button id="Heater-6" className="drum-pad" onClick={this.hitDrumButton}>
          <audio id="Z" src={heater6} />
          Z
        </button>
        <button id="RP4_KICK_1" className="drum-pad" onClick={this.hitDrumButton}>
          <audio id="X" src={rp4} />
          X
        </button>
        <button id="Cev_H2" className="drum-pad" onClick={this.hitDrumButton}>
          <audio id="C" src={cev} />
          C
        </button>
      </div>
    );
  }

}

export default App;
