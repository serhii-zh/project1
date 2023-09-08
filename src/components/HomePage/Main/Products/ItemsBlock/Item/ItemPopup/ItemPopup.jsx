import { createPortal } from 'react-dom';
import styles from './ItemPopup.module.css';
import close from '../../../../../../../images/close.png';

const ItemPopup = ({ isShown, handleClose, item }) => {
  const content = (
    <>
      <div className={styles.blurBg}></div>
      <div className={styles.itemInfo}>
        <img
          className={styles.close}
          src={close}
          alt='Close'
          onClick={() => handleClose(isShown)}
        />
        <div className={styles.itemBody}>
          <div className={styles.basicInfo}>
            <div className={styles.image}>
              <img src={item.picture} alt={item.title} />
            </div>
            <div className={styles.details}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>
                {item.description ? item.description : 'No description'}
              </p>
              <div className={styles.price}>
                PRICE: <span>${item.price}</span>
              </div>
              <div>+ 1 -</div>
              <div>
                <div className={styles.totalItems}>
                  Items: <span>1</span>
                </div>
                <div className={styles.totalPrice}>
                  Total: <span>$000</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.addButtons}>
              <button>add to cart</button>
              <button>add to favorites</button>
            </div>
            <button>buy now</button>
          </div>
        </div>
      </div>
    </>
  );
  return createPortal(content, document.getElementById('portal'));
};

export default ItemPopup;
