import PropTypes from 'prop-types';

export default function SectionTitle({ title, children }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

SectionTitle.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
