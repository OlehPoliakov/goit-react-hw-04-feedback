import { useState } from 'react';
import { Box } from './Box';
import { Container } from './App.styled';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import Statistics from './Statistics/Statistics';
import NotificationMessage from './Notification/NotificationMessage';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickButton = e => {
    const option = e.target.name;

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log(`No option called ${option}`);
        break;
    }
  };

  const sumFeedback = () => good + neutral + bad;

  const percentPositivFeedback = () => {
    let result = 0;
    if (sumFeedback() > 0) {
      result = Math.round((good / sumFeedback()) * 100);
    }
    return result;
  };

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
              onLeaveFeedback={onClickButton}
            ></FeedbackOptions>
          </SectionTitle>
        </Box>

        <Box p={2} width={270}>
          <SectionTitle title="Statistics feedback">
            {sumFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={sumFeedback()}
                positivePercentage={percentPositivFeedback()}
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
