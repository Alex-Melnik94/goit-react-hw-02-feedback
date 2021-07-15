import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li>
        Good: <span className={styles.value}>{good}</span>
      </li>
      <li>
        Neutral: <span className={styles.value}>{neutral}</span>
      </li>
      <li>
        Bad: <span className={styles.value}>{bad}</span>
      </li>
      <li>
        Total: <span className={styles.value}>{total}</span>
      </li>
      <li>
        Positive feedback:{' '}
        <span className={styles.value}>
          {total !== 0 ? positivePercentage : 0}%
        </span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
