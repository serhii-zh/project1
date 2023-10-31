import { useDispatch, useSelector } from 'react-redux';
import styles from './Favorites.module.css';
import { favoriteItems } from '../../../../../../../store/slices/productsSlice';
import { getFavorites } from '../../../../../../../store/thunks/productsThunks';
import { useEffect } from 'react';
import Item from '../../../../Products/ItemsBlock/Item/Item';

const Favorites = () => {
  const favorites = useSelector(favoriteItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <ul className={styles.favoritesList}>
      {favorites.length > 0
        ? favorites.map((i) => {
            return (
              <li key={i.id}>
                <Item item={i} />
              </li>
            );
          })
        : 'No Favorites for Now'}
    </ul>
  );
};

export default Favorites;
