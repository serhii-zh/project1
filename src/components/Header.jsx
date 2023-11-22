import styles from '../styles/components/Header.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { currentUser } from '../store/slices/currentUserSlice';
import { clearData } from '../store/slices/productsSlice';
import { getAccountData } from '../store/thunks/userThunks';

import { userToken } from '../services/axiosInstances';

import logoImg from '../images/logo.png';
import hFavoritesImg from '../images/heart_white.png';
import hCartImg from '../images/cart_white.png';

import { StyledLogo } from './ui/StyledLogo';
import { StyledIcon } from './ui/StyledIcon';

import { RegisterLogin } from './ui/RegisterLogin';
import { UserBlock } from './ui/UserBlock';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(currentUser);

  useEffect(() => {
    userToken && dispatch(getAccountData());
  }, [dispatch]);

  const handleLogoClick = () => {
    dispatch(clearData());
    navigate('/');
  };

  const handleFavoritesClick = () => {
    navigate('/settings/favorites');
  };

  const handleShoppingCartClick = () => {
    navigate('/shopping-cart');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoTitleBlock}>
        <StyledLogo
          src={logoImg}
          alt='Everything U Need'
          onClick={handleLogoClick}
        />
        <h2>Everything U Need</h2>
      </div>
      <div className={styles.shoppingLoggingBlock}>
        <div className={styles.favoritesCartBlock}>
          <StyledIcon
            src={hFavoritesImg}
            alt='Favorites'
            onClick={handleFavoritesClick}
          />
          <StyledIcon
            src={hCartImg}
            alt='Shopping Cart'
            onClick={handleShoppingCartClick}
          />
        </div>
        {userData ? <UserBlock /> : <RegisterLogin />}
      </div>
    </header>
  );
};
