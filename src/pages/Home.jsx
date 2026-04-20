import styles from '../assets/css/Home.module.css';
import Nav from '../components/Nav/Nav';

const Home = () => {
    return (
        <div className={styles.home}>
            <Nav />
            <div className={styles['home-content']}>
                <h1>Welcome to Zylow</h1>
                <p>Your gateway to quality education and career opportunities.</p>
            </div>
        </div>
    );
}

export default Home;