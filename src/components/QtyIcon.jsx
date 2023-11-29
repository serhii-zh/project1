import { useEffect } from 'react';
import styles from '../styles/components/QtyIcon.module.css';

export const QtyIcon = ({ quantity }) => {
  useEffect(() => {}, [quantity]);

  return <span className={styles.qtyIcon}>{quantity}</span>;
};
