import React from 'react';
import Statistics from './statistics-ui/statistics';
import FeedbackOptions from './feedbackoptions-ui/feedbackoptions';
import Section from './section-ui/section';
import Notification from './notification-ui/notification';
import styles from './app.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getState = () => {
    const stateArr = Object.keys(this.state);
    return stateArr;
  };

  onLeaveFeedback = stateKey => {
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return percentage;
  };

  render() {
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.getState()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
