import styles from './Item.module.css';
import heartInactive from '../../../../../images/heart_inactive.png';

const Item = ({ imageUrl, title, price }) => {
  if (title.length > 20) {
    title = title.slice(0, 20) + '...';
  }
  return (
    <div className={styles.item}>
      <img src={imageUrl} alt='product' />
      <div className={styles.addToFavorites}>
        <img src={heartInactive} alt='add-to-favorites-i' />
      </div>
      <p>{title}</p>
      <span>${price}</span>
    </div>
  );
};

export default Item;
