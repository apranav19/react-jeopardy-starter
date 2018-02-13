import React, { Component } from 'react';
import { JeopardyService } from "./services/JeopardyService";
import './App.css';
import QuestionCard from "./QuestionCard";
import ScoreKeeper from "./ScoreKeeper";

class App extends Component {

  client;

  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      questions: [],
      score: 0
    }
    /*this.state = {
      questions: [],
      score: 0
    }*/
  }

  validate = () => {
    let answer = document.getElementById("answer").value;
    let actualAnswer = this.state.answer;
    
    let questionValue = this.state.value;
    
    if(answer === actualAnswer) {
      this.setState({
        score: this.state.score + questionValue
      });
    } else {
      this.setState({
        score: this.state.score - questionValue
      });
    }

    document.getElementById("answer").value = "";

    console.log(actualAnswer);

    this.getNewQuestion();
  }

  getNewQuestion = (numQuestions) => {
    return this.client.getQuestions(numQuestions).then(result => {
      this.setState({
        questions: this.parseQuestions(result.data)
      });
    });
  }

  parseQuestions = (questions) => {
    let questionsResult = [];

    questions.forEach((question) => {
        let questionResult = {};
        questionResult.question = question.question;
        questionResult.category = question.category.title;
        questionResult.value = question.value;
        questionResult.answer = question.answer;

        questionsResult.push(questionResult);
    });

    return questionsResult;
  }

  componentDidMount = () => {
    this.getNewQuestion(3);
  }

  checkQuestionsState = () => {
    let result = false;

    this.state.questions.forEach((question) => {
      if(question !== "undefined") {
        console.log(question);
      }
    });

  }

  render() {
    /*return (
      <div> Hello </div>
    );*/
    

    if(this.state.questions.length > 0) {
      let cards = this.state.questions.map((question, index) => {
        const idName = "question"+index;
        return <QuestionCard key={idName}
                        id={idName}
                        question={question.question} 
                        category={question.category} 
                        value={question.value}
                        answer={question.answer} />
      });
      return (
        <div className="jeopardy">
          {cards}
          <ScoreKeeper score={this.state.score} validator={this.validate} />
        </div>
      );
    } else {
      return (
        <div className="jeopardy">
          <h1> Loading .... </h1>
        </div>
      );
    }
  }
}

export default App;
