import { useEffect, useState } from 'react';
import styles from './SettingsBlock.module.css';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import EditAccount from './Content/EditAccount/EditAccount';
import Favorites from './Content/Favorites/Favorites';

const SettingsBlock = () => {
  const [editFocused, setEditFocused] = useState(false);
  const [ordersFocused, setOrdersFocused] = useState(false);
  const [favoritesFocused, setFavoritesFocused] = useState(false);

  const url = useLocation();
  const isPathWithEdit = url.pathname.includes('/edit');

  useEffect(() => {
    if (isPathWithEdit) {
      setEditFocused(true);
      setOrdersFocused(false);
      setFavoritesFocused(false);
    }
  }, [isPathWithEdit]);

  const content = (
    <>
      <nav className={styles.menu}>
        <NavLink
          to='edit'
          className={editFocused && styles.focused}
          onClick={() => {
            setOrdersFocused(false);
            setFavoritesFocused(false);
          }}
          onBlur={() => setEditFocused(true)}
        >
          Edit Account
        </NavLink>
        <NavLink
          to='orders'
          className={ordersFocused && styles.focused}
          onClick={() => {
            setEditFocused(false);
            setFavoritesFocused(false);
          }}
          onBlur={() => setOrdersFocused(true)}
        >
          Orders History
        </NavLink>
        <NavLink
          to='favorites'
          className={favoritesFocused && styles.focused}
          onClick={() => {
            setEditFocused(false);
            setOrdersFocused(false);
          }}
          onBlur={() => setFavoritesFocused(true)}
        >
          Favorites
        </NavLink>
      </nav>
      <div className={styles.optionContent}>
        <Routes>
          <Route path='edit' element={<EditAccount />} />
          <Route path='orders' element={<div>orders</div>} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>
      </div>
    </>
  );

  return content;
};

export default SettingsBlock;
