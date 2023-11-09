import styles from '../../styles/components/ui/Loader.module.css';
import loader from '../../images/loader.gif';

export const Loader = () => {
  const content = (
    <>
      <div className={styles.blurBg}></div>
      <img className={styles.loaderImg} src={loader} alt='loading' />
    </>
  );
  return content;
};
