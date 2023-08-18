import styles from './Loader.module.css';
import loader from '../../images/loader.gif';

const Loader = () => {
  const content = (
    <>
      <div className={styles.blurBg}></div>
      <img className={styles.loaderImg} src={loader} alt='loading' />
    </>
  );
  return content;
};

export default Loader;
