import { useDispatch, useSelector } from 'react-redux';
import Item from './Item/Item';
import styles from './ItemsBlock.module.css';
import { useEffect, useState } from 'react';
import {
  fetchProducts,
  products,
} from '../../../../store/slices/productsSlice';

const ItemsBlock = () => {
  const dispatch = useDispatch();
  const items = useSelector(products);

  const [limit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = items.length > 0 && Math.ceil(items[0].id / 12);

  useEffect(() => {
    dispatch(fetchProducts({ limit, offset }));
  }, [dispatch, offset, limit]);

  const showNextPage = () => {
    setCurrentPage(currentPage + 1);
    setOffset(offset + 12);
  };

  const content = (
    <div className={styles.itemsBlock}>
      <ul className={styles.itemsList}>
        {items.length > 0 &&
          items.map((p) => (
            <li key={p.id}>
              <Item title={p.title} imageUrl={p.picture} price={p.price} />
            </li>
          ))}
      </ul>
      {currentPage < pages && (
        <button onClick={() => showNextPage()}>Load more...</button>
      )}
    </div>
  );

  return content;
};

export default ItemsBlock;
