import styles from '../styles/components/Header.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorageCart } from '../hooks/useLocalStorageCart';

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
import { QtyIcon } from './QtyIcon';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(currentUser);
  const { itemsInCart } = useLocalStorageCart();

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
          <div className={styles.favorites}>
            <StyledIcon
              src={hFavoritesImg}
              alt='Favorites'
              onClick={handleFavoritesClick}
            />
            <span className={styles.itemsInFavoritesQty}></span>
          </div>
          <div className={styles.shoppingCart}>
            <StyledIcon
              src={hCartImg}
              alt='Shopping Cart'
              onClick={handleShoppingCartClick}
            />
            <QtyIcon quantity={itemsInCart.length} />
          </div>
        </div>
        {userData ? <UserBlock /> : <RegisterLogin />}
      </div>
    </header>
  );
};
