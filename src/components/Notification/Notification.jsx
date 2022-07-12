import { PropTypes } from 'prop-types';

import styles from './Notification.module.css'

export const Notification = ({ message }) => {
    return (
        <p className={styles.natification}>{message}</p>
    )
}

Notification.propTypes = {
   message: PropTypes.string.isRequired,
}