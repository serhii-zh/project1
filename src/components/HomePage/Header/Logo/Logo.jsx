import styles from './Logo.module.css';
import logo from '../../../../images/logo.png';

const Logo = () => {
  return <img src={logo} alt='SnickerStore logo' className={styles.logo}/>;
};

export default Logo;
