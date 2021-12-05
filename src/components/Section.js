import PropTypes from "prop-types";
import styles from "./feedback.module.css";

const Section = ({ title = "", children }) => (
  <section>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
};
export default Section;