import { useDispatch, useSelector } from 'react-redux';
import Item from './Item/Item';
import styles from './ItemsBlock.module.css';
import { useEffect, useState } from 'react';
import {
  clearData,
  fetchProducts,
  findProducts,
  products,
} from '../../../../../store/slices/productsSlice';
import ShowMoreButton from '../../../../ShowMoreButton/ShowMoreButton';
import { useLocation } from 'react-router-dom';

const ItemsBlock = () => {
  const dispatch = useDispatch();
  const items = useSelector(products);
  const { search } = useLocation();

  const [keywords, setKeywords] = useState('');

  const [limit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = items.length > 0 && Math.ceil(items[0].id / 12);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    if (search.includes('keywords')) {
      setKeywords(queryParams.get('keywords'));
      // debugger;
      dispatch(findProducts({ keywords, limit, offset }));
    } else {
      dispatch(fetchProducts({ limit, offset }));
    }
  }, [dispatch, offset, limit, search, keywords]);

  useEffect(() => {
    const footerElement = document.getElementById('footer');
    const footerPosition = footerElement.offsetTop;
    window.scrollTo({
      top: footerPosition,
      behavior: 'smooth',
    });
  });

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
      {currentPage < pages && <ShowMoreButton onClickFnc={showNextPage} />}
    </div>
  );

  return content;
};

export default ItemsBlock;
