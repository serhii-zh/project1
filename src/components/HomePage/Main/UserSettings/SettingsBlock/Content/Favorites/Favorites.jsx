import { useDispatch, useSelector } from 'react-redux';
import styles from './Favorites.module.css';
import {
  favoriteItems,
  getFavorites,
  token,
} from '../../../../../../../store/slices/productsSlice';
import { useEffect } from 'react';
import Item from '../../../../Products/ItemsBlock/Item/Item';

const Favorites = () => {
  const favorites = useSelector(favoriteItems);
  const userToken = useSelector(token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites(userToken));
  }, [dispatch, userToken]);

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
