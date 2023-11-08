import { Route, Routes } from 'react-router-dom';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';
import styles from './MainContainer.module.css';

const MainContainer = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/settings/*' element={<SettingsPage />} />
        <Route path='/*' element={<div>not found page</div>} />
      </Routes>
    </main>
  );
};

export default MainContainer;
