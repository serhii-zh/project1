import styles from './Item.module.css';
import heartInactive from '../../../../../../images/heart_inactive.png';
import { useState } from 'react';
import ItemPopup from './ItemPopup/ItemPopup';

const Item = ({ item }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (isShown) => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className={styles.item} onClick={() => handleClick(isShown)}>
        <img src={item.picture} alt='product' />
        <div className={styles.addToFavorites}>
          <img src={heartInactive} alt='add-to-favorites-i' />
        </div>
        <p>{item.title}</p>
        <span>${item.price}</span>
      </div>
      {isShown && (
        <ItemPopup isShown={isShown} handleClose={handleClick} item={item} />
      )}
    </>
  );
};

export default Item;
