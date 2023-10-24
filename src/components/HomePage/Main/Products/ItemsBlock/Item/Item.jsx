import styles from './Item.module.css';
import { useState } from 'react';
import ItemPopup from './ItemPopup/ItemPopup';
import StyledFavoritesButton from '../../../../../FavoritesButton/StyledFavoritesButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  token,
} from '../../../../../../store/slices/productsSlice';

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const userToken = useSelector(token);
  const [isShown, setIsShown] = useState(false);

  const handleClick = (isShown) => {
    setIsShown(!isShown);
  };

  const handleFavoriteClick = (itemId, userToken) => {
    item.favorite
      ? dispatch(removeFromFavorites({ itemId, userToken }))
      : dispatch(addToFavorites({ itemId, userToken }));
  };

  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.item} onClick={() => handleClick(isShown)}>
          <img src={item.picture} alt='product' />
          <p>{item.title}</p>
          <span>${item.price}</span>
        </div>
        <StyledFavoritesButton
          $favorite={item.favorite}
          onClick={() => handleFavoriteClick(item.id, userToken)}
        />
      </div>
      {isShown && (
        <ItemPopup
          isShown={isShown}
          handleFavoriteClick={handleFavoriteClick}
          userToken={userToken}
          handleClose={handleClick}
          item={item}
        />
      )}
    </>
  );
};

export default Item;
