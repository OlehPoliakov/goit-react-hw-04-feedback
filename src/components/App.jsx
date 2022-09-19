import React, { Component } from 'react';
// import { Box } from './Box';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import Statistics from './Statistics/Statistics';

export class App extends Component() {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButton = element => {
    this.setState(prevState => ({
      [element]: prevState[element] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log(this.state)
    
    return (
      <>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onClickButton}
          ></FeedbackOptions>
        </SectionTitle>

        <SectionTitle title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
          >

          </Statistics>
        </SectionTitle>
      </>
    );
  }
}
