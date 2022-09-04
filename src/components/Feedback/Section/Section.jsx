import PropTypes from 'prop-types';

const Statistics = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
