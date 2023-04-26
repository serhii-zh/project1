import styles from './Item.module.css';

const Item = ({ imageUrl, title, price }) => {
  if (title.length > 20) {
    title = title.slice(0, 20) + '...';
  }
  return (
    <div className={styles.item}>
      <img src={imageUrl} alt='product' />
      <p>{title}</p>
      <span>${price}</span>
    </div>
  );
};

export default Item;