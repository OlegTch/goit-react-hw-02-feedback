import PropTypes from "prop-types";
import styles from "./feedback.module.css";

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onPositivePercentage,
}) => (
  <ul className={styles.StatisticsList}>
    <li className={styles.StatisticsItem}>
      <p className={styles.StatisticsText}>
        Good:
        <span className={styles.StatisticsValue}>{onGood}</span>
      </p>
    </li>
    <li className={styles.StatisticsItem}>
      <p className={styles.StatisticsText}>
        Neutral:
        <span className={styles.StatisticsValue}>{onNeutral}</span>
      </p>
    </li>
    <li className={styles.StatisticsItem}>
      <p className={styles.StatisticsText}>
        Bad:
        <span className={styles.StatisticsValue}>{onBad}</span>
      </p>
    </li>
    <li className={styles.StatisticsItem}>
      <p className={styles.StatisticsText}>
        Total:
        <span className={styles.StatisticsValue}>{onTotal}</span>
      </p>
    </li>
    <li className={styles.StatisticsItem}>
      <p className={styles.StatisticsText}>
        Positive feedback:
        <span className={styles.StatisticsValue}>{onPositivePercentage}</span>%
      </p>
    </li>
  </ul>
);

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onPositivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
