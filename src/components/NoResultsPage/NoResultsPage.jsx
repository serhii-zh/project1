import styles from './NoResultsPage.module.css';
import { useEffect, useState } from 'react';

const NoResultsPage = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNoResults(true);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const [showNoResults, setShowNoResults] = useState(false);
  const message = `No Results Found :(`;

  return (
    <div className={styles.notFoundMessage}>{showNoResults && message}</div>
  );
};

export default NoResultsPage;
