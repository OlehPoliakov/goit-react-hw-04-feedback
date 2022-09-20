import PropTypes from 'prop-types';
import { Paragraph } from './NotificationMessage.styled.jsx';

export default function NotificationMessage() {
  return <Paragraph>"There is no feedback"</Paragraph>;
}

NotificationMessage.prototype = {
  message: PropTypes.string.isRequired,
};
