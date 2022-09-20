import PropTypes from 'prop-types';
import { List, Paragraph, Wrap } from './Statistics.styled.jsx';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <List>
      <Paragraph>
        Good: <Wrap>{good}</Wrap>
      </Paragraph>
      <Paragraph>
        Neutral: <Wrap>{neutral}</Wrap>
      </Paragraph>
      <Paragraph>
        Bad: <Wrap>{bad}</Wrap>
      </Paragraph>
      <Paragraph>
        Total: <Wrap>{total}</Wrap>
      </Paragraph>
      <Paragraph>
        Positive feedback:
        <Wrap>{positivePercentage}%</Wrap>
      </Paragraph>
    </List>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
