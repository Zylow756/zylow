import styles from '../components/ShowCase/ShowCase.module.css';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import ShowCase from '../components/ShowCase/ShowCase';

const ShowCasePage = () =>
{
    return (
        
            <div className={styles.rootImage}>
              {/* Header */}
              <Nav />
              <ShowCase />
      <Footer />
    </div>
    );
};

export default ShowCasePage;