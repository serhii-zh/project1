import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './HomePage.module.css';
import Main from './Main/Main';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
