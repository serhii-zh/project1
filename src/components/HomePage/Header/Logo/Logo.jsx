import styles from './Logo.module.css';
import logo from '../../../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearData } from '../../../../store/slices/productsSlice';

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearData());
    navigate('/');
  };
  return (
    <img
      src={logo}
      alt='SnickerStore logo'
      className={styles.logo}
      onClick={handleClick}
    />
  );
};

export default Logo;
