import PropTypes from "prop-types";
import styles from "./feedback.module.css";

const Notification = ({ message = "" }) => (
  <div className={styles.NotificationItem}>{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
