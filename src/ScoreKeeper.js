import React, { Component } from 'react';
import { JeopardyService } from "./services/JeopardyService";
import './App.css';

class ScoreKeeper extends Component {

  constructor(props){
    super(props);
  }

  

  render() {
    return (
      <div className="scoreCard">
        <p> Score: {this.props.score} </p>
        <div className="userInput">
            <input id="answer" type="text" />
            <button onClick={this.props.validator}> Submit </button>
          </div>
      </div>
    );
  }
}

export default ScoreKeeper;
