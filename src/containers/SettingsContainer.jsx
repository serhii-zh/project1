import { useEffect, useState } from 'react';
import styles from '../styles/containers/SettingsContainer.module.css';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import { EditAccountForm } from '../components/EditAccountForm';
import { FavoritesList } from '../components/FavoritesList';

export const SettingsContainer = () => {
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
          <Route path='edit' element={<EditAccountForm />} />
          <Route path='orders' element={<div>orders</div>} />
          <Route path='favorites' element={<FavoritesList />} />
        </Routes>
      </div>
    </>
  );

  return content;
};
