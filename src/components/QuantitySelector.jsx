import styles from '../styles/components/QuantitySelector.module.css';

export const QuantitySelector = ({ itemQty, setItemQty }) => {
  const increaseBy1 = () => {
    setItemQty(itemQty + 1);
  };

  const decreaseBy1 = () => {
    itemQty > 1 && setItemQty(itemQty - 1);
  };

  return (
    <div className={styles.counter}>
      <button onClick={() => decreaseBy1()}>-</button>
      <p>{itemQty}</p>
      <button onClick={() => increaseBy1()}>+</button>
    </div>
  );
};
