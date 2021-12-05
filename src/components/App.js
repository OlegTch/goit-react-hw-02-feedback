import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

import styles from "./feedback.module.css";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = (label) => {
    this.setState((state) => {
      return { [label]: state[label] + 1 };
    });
  };

  countTotalFeedback = () => {
    let values = Object.values(this.state);
    return values.reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    if (this.countTotalFeedback() === 0) {
      return positivePercentage;
    }
    return Math.floor(
      (positivePercentage = (this.state.good * 100) / this.countTotalFeedback())
    );
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.thumb}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleButton}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              onGood={this.state.good}
              onNeutral={this.state.neutral}
              onBad={this.state.bad}
              onTotal={total}
              onPositivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
