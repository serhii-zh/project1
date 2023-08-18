import { useDispatch, useSelector } from 'react-redux';
import Item from './Item/Item';
import styles from './ItemsBlock.module.css';
import { useEffect, useState } from 'react';
import {
  products,
  offsetValue,
  fetchProducts,
  findProducts,
  fetchProductsByCategoryId,
  increaseOffsetBy12,
  searchKeywords,
  selectedCategoryId,
  sortByValue,
  productsIsLoading,
} from '../../../../../store/slices/productsSlice';
import ShowMoreButton from '../../../../ShowMoreButton/ShowMoreButton';
import NoResultsPage from '../../../../NoResultsPage/NoResultsPage';
import Loader from '../../../../Loader/Loader';

const ItemsBlock = () => {
  const dispatch = useDispatch();
  const items = useSelector(products);
  const offset = useSelector(offsetValue);
  const sortBy = useSelector(sortByValue);
  const itemsLoading = useSelector(productsIsLoading);

  const keywords = useSelector(searchKeywords);
  const categoryId = useSelector(selectedCategoryId);

  const [limit] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = items.length > 0 && Math.ceil(items[0].id / 12);

  useEffect(() => {
    if (keywords) {
      dispatch(
        findProducts({
          keywords,
          limit,
          offset,
        })
      );
    } else if (categoryId > 0) {
      dispatch(
        fetchProductsByCategoryId({ categoryId, limit, offset, sortBy })
      );
    } else {
      dispatch(fetchProducts({ limit, offset, sortBy }));
    }
  }, [dispatch, offset, limit, keywords, categoryId, sortBy]);

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
    dispatch(increaseOffsetBy12());
  };

  const content = (
    <div className={styles.itemsBlock}>
      {itemsLoading && <Loader />}
      {items.length === 0 && <NoResultsPage />}
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
