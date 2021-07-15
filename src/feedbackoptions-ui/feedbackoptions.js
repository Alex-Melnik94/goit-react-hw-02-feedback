import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {options.map(option => {
        return (
          <li key={option} className={styles.listItem}>
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
