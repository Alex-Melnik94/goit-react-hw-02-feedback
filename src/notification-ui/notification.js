import React from 'react';
import PropTypes from 'prop-types';
import styles from './notification.module.css';

const Notification = ({ message }) => {
  return <h2 className={styles.title}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
