import React from 'react';

import MathBasic from './math-basic';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.loadCourse = this.loadCourse.bind(this);
    this.trackProgress = this.trackProgress.bind(this);
    
    this.state = {
      Course: MathBasic,
      onMilestoneReached: this.trackProgress
    };
  }
  
  trackProgress(name) {
    alert(name);
  }

  loadCourse(courseName) {
    // async module load over here
    import(`./${courseName}`)
      .then(module => {
        this.setState({
          Course: module.default
        });
      });
  }

  render() {
    const {
      Course,
      ...downProps
    } = this.state;
    
    return (
      <div className="App">
      <p>
        A sample async loader with css and js Encapsulation
      </p>
      <div>
        <button onClick={() => {
          this.loadCourse('math-basic');
        }}> Load Basic Course </button>
        <button onClick={ () => {
          this.loadCourse('math-advanced');
        }}> Load Advanced Course </button>
      </div>
      <div className="course__container">
        <Course {...downProps}></Course>
      </div>
    </div>
    );
  }
}

export default App;
