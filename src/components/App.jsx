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

// Приклад на reducer

// const initialState = { good: 0, neutral: 0, bad: 0, total: 0, persentage: 0 };
// const actionTypes = {
//   good: 'Good',
//   neutral: 'Neutral',
//   bad: 'Bad',
//   total: 'Total',
//   persentage: 'Persentage',
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case actionTypes.good:
//       return { ...state, good: state.good + 1 };
//     case actionTypes.neutral:
//       return { ...state, neutral: state.neutral + 1 };
//     case actionTypes.bad:
//       return { ...state, bad: state.bad + 1 };
//     case actionTypes.total:
//       return {
//         ...state,
//         total: Object.values(state)
//           .slice(0, 3)
//           .reduce((total, state) => {
//             return total + state;
//           }, 0),
//       };
//     case actionTypes.persentage:
//       return {
//         ...state,
//         percentage: Math.round((state.good * 100) / state.total),
//       };
//     default:
//       throw new Error(`No option called ${action.type}`);
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { good, neutral, bad, total, persentage } = state;

//   const stateKeys = Object.keys(state);

//   const stateNew = stateKeys.slice(0, stateKeys.legth - 2);

//   useEffect(() => {
//     dispatch({ type: actionTypes.total });
//     dispatch({ type: actionTypes.percentage });
//   }, [good, neutral, bad]);

//   const addFeedback = option => {
//     dispatch({ type: option });
//   };
//   return (
//     <Container>
//       <Box
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         flexDirection="column"
//       >
//         <Box p={2} width={270}>
//           <SectionTitle title="Please leave feedback">
//             <FeedbackOptions
//               options={stateNew}
//               onLeaveFeedback={addFeedback}
//             ></FeedbackOptions>
//           </SectionTitle>
//         </Box>

//         <Box p={2} width={270}>
//           <SectionTitle title="Statistics feedback">
//             {/* {sumFeedback() > 0 ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 positivePercentage={persentage}
//               />
//             ) : (
//               <NotificationMessage />
//             )} */}
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={persentage}
//             />
//           </SectionTitle>
//         </Box>
//       </Box>
//     </Container>
//   );
// }
