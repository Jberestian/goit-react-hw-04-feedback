import PropTypes from 'prop-types';

import s from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className={s.list}>
        <p>Good: {good}</p>
      </li>
      <li className={s.list}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={s.list}>
        <p>Bad: {bad}</p>
      </li>
      <li className={s.list}>
        <p>Total: {total}</p>
      </li>
      <li className={s.list}>
        <p>Positive: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
