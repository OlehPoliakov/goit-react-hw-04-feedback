import PropTypes from 'prop-types';
import { Section, Title } from './SectionTitle.styled.jsx';

export default function SectionTitle({ title, children }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
