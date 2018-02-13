import React, { Component } from 'react';
import { JeopardyService } from "./services/JeopardyService";
import './App.css';

class QuestionCard extends Component {

  constructor(props){
    super(props);
  }

  onCardClick = (event) => {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <div onClick={this.onCardClick} className="questionCard" id={this.props.id}>
        <div className="question defHide">
          <p> Question: {JSON.stringify(this.props.question)} </p>
        </div>
        <div className="category">
          <p> Category: {JSON.stringify(this.props.category)} </p>
        </div>
        <div className="value defHide">
          <p> Value: {JSON.stringify(this.props.value)}</p>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
