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
  token,
} from '../../../../../store/slices/productsSlice';

import NoResultsPage from '../../../../NoResultsPage/NoResultsPage';
import Loader from '../../../../Loader/Loader';
import { LoadMoreButton } from '../../../../Button/StyledButton';

const ItemsBlock = () => {
  const dispatch = useDispatch();
  const items = useSelector(products);
  const offset = useSelector(offsetValue);
  const sortBy = useSelector(sortByValue);
  const itemsLoading = useSelector(productsIsLoading);
  const userToken = useSelector(token);

  const keywords = useSelector(searchKeywords);
  const categoryId = useSelector(selectedCategoryId);

  const [limit] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = items.length > 0 && Math.ceil(items[0].id / 12);

  useEffect(() => {
    if (keywords) {
      dispatch(
        findProducts({
          userToken,
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
      dispatch(fetchProducts({ userToken, limit, offset, sortBy }));
    }
  }, [dispatch, userToken, offset, limit, keywords, categoryId, sortBy]);

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
          items.map((i) => (
            <li key={i.id}>
              <Item item={i} />
            </li>
          ))}
      </ul>
      {currentPage < pages && (
        <LoadMoreButton onClick={showNextPage}>Load More...</LoadMoreButton>
      )}
    </div>
  );

  return content;
};

export default ItemsBlock;
