import { useDispatch } from 'react-redux';
import styles from './Search.module.css';
import {
  clearData,
  findProducts,
} from '../../../../../../store/slices/productsSlice';
import { useState } from 'react';

const Search = () => {
  const dispatch = useDispatch();

  const [keywords, setKeywords] = useState('');
  const [limit] = useState(12);
  const [offset, setOffset] = useState(0);

  const handleSearch = () => {
    dispatch(clearData());
    dispatch(findProducts({ keywords, limit, offset }));
  };

  return (
    <input
      className={styles.search}
      type='text'
      name='search-field'
      id='search-field'
      placeholder='Search products by name'
      onKeyUp={(evt) => {
        setKeywords(evt.target.value);
        evt.key === 'Enter' && handleSearch();
      }}
    />
  );
};

export default Search;
