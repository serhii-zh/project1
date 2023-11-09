import styles from '../styles/components/NoResultsMsg.module.css';
import { useEffect, useState } from 'react';

const NoResultsMsg = () => {
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

export default NoResultsMsg;
