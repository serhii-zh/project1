import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from '../pages/ProductsPage';
import { SettingsPage } from '../pages/SettingsPage';
import styles from '../styles/containers/MainContainer.module.css';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';

export const MainContainer = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/settings/*' element={<SettingsPage />} />
        <Route path='/shopping-cart' element={<ShoppingCartPage />} />
        <Route path='/*' element={<div>not found page</div>} />
      </Routes>
    </main>
  );
};
