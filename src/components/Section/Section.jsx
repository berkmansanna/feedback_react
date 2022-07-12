import { PropTypes } from 'prop-types';
import styles from './Section.module.css'

export const Section = ({title, children}) => {
    return (<section><h2 className={styles.title}>{title}
        { children}</h2></section>)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}