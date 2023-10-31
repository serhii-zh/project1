import styles from './Item.module.css';
import { useState } from 'react';
import ItemPopup from './ItemPopup/ItemPopup';
import StyledFavoritesButton from '../../../../../FavoritesButton/StyledFavoritesButton';
import { useDispatch } from 'react-redux';
import {
  addToFavorites,
  modifyFavoriteStatus,
  removeFromFavorites,
} from '../../../../../../store/slices/productsSlice';

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  const handleClick = (isShown) => {
    setIsShown(!isShown);
  };

  const handleFavoriteClick = (itemId) => {
    dispatch(modifyFavoriteStatus(itemId));
    item.favorite
      ? dispatch(removeFromFavorites({ itemId }))
      : dispatch(addToFavorites({ itemId }));
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
          onClick={() => handleFavoriteClick(item.id)}
        />
      </div>
      {isShown && (
        <ItemPopup
          isShown={isShown}
          handleFavoriteClick={handleFavoriteClick}
          handleClose={handleClick}
          item={item}
        />
      )}
    </>
  );
};

export default Item;
