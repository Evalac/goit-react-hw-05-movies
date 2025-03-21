import css from './LoadMoreBtn.module.css';
import { useCallback } from 'react';

const LoadMoreBtn = ({ setPage }) => {
  const handleClick = useCallback(() => {
    setPage(prevState => prevState + 1);
  }, [setPage]);

  return (
    <button className={css.load_more_btn} onClick={handleClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
