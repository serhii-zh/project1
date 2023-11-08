import { useDispatch, useSelector } from 'react-redux';
import Item from '../../components/Item/Item';
import styles from './ItemsContainer.module.css';
import { useEffect, useState } from 'react';
import {
  products,
  offsetValue,
  increaseOffsetBy12,
  searchKeywords,
  selectedCategoryId,
  sortByValue,
  productsIsLoading,
} from '../../store/slices/productsSlice';
import {
  fetchProducts,
  findProducts,
  fetchProductsByCategoryId,
} from '../../store/thunks/productsThunks';
import NoResultsPage from '../../components/NoResultsPage/NoResultsPage';
import Loader from '../../components/ui/Loader/Loader';
import { LoadMoreButton } from '../../components/ui/StyledButton';

const ItemsContainer = () => {
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
        fetchProductsByCategoryId({
          categoryId,
          limit,
          offset,
          sortBy,
        })
      );
    } else {
      dispatch(
        fetchProducts({
          limit,
          offset,
          sortBy,
        })
      );
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

export default ItemsContainer;
