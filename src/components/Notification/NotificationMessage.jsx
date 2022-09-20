import PropTypes from 'prop-types';
import { Paragraph } from './NotificationMessage.styled.jsx';

export default function NotificationMessage() {
  return <p>"There is no feedback"</p>;
}

NotificationMessage.prototype = {
  message: PropTypes.string.isRequired,
};
