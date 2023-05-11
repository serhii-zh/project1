import { Route, Routes } from 'react-router-dom';
import Products from './Products/Products';
import UserSettings from './UserSettings/UserSettings';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/settings/*' element={<UserSettings />} />
    </Routes>
  );
};

export default Main;
