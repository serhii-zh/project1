import styles from '../styles/components/QuantitySelector.module.css';

const QuantitySelector = ({ itemsNumber, setItemsNumber }) => {
  const increaseBy1 = () => {
    setItemsNumber(itemsNumber + 1);
  };

  const decreaseBy1 = () => {
    itemsNumber > 1 && setItemsNumber(itemsNumber - 1);
  };

  return (
    <div className={styles.counter}>
      <button onClick={() => decreaseBy1()}>-</button>
      <p>{itemsNumber}</p>
      <button onClick={() => increaseBy1()}>+</button>
    </div>
  );
};

export default QuantitySelector;