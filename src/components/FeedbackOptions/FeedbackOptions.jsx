import { PropTypes } from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <ul className={styles.feedbackList}>
      {options.map(option => (
        <li className={styles.feedbackItem} key={option}>
          <button
            className={styles.btnFeedback}
            onClick={() => onBtnClick(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onBtnClick: PropTypes.func.isRequired,
};
