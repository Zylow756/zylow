import styles from '../assets/css/Service.module.css';
import Nav from '../components/Nav/Nav';

const Service = () => {
    return (
        <div className={styles.service}>
            <Nav />
            <div className={styles['service-content']}>
                <h1>Our Services</h1>
                <p>Discover the range of services we offer to support your educational and career goals.</p>
            </div>
        </div>
    );
}

export default Service;