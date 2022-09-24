import React from 'react';
import { Box } from './Box';
import { Container } from './App.styled';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import Statistics from './Statistics/Statistics';
import NotificationMessage from './Notification/NotificationMessage';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButton = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };

  sumFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  };

  percentPositivFeedback = () => {
    return Math.round((this.state.good / this.sumFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box p={2} width={270}>
            <SectionTitle title="Please leave feedback">
              <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={this.onClickButton}
              ></FeedbackOptions>
            </SectionTitle>
          </Box>

          <Box p={2} width={270}>
            <SectionTitle title="Statistics feedback">
              {this.sumFeedback() > 0 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.sumFeedback()}
                  positivePercentage={this.percentPositivFeedback()}
                />
              ) : (
                <NotificationMessage />
              )}
            </SectionTitle>
          </Box>
        </Box>
      </Container>
    );
  }
}
