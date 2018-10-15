import React, { Component } from 'react';
import './App.css';
import GenerateSim from './GenerateSim';
import DisplaySim from './DisplaySim';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson : {},
    }

  }

  getSimpson() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response => response.json())
    .then(data => {
      this.setState({
        simpson: data[0],
      });
    });
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
       <GenerateSim SelectSim={()=> this.getSimpson()}/>
       
        <DisplaySim simpson={this.state.simpson}/>
       
      </div>
    );
  }
}

export default App;
