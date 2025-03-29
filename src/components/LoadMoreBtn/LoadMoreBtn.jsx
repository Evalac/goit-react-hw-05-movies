import { useEffect, useRef } from 'react';
import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ setPage, page }) {
  const buttonRef = useRef();

  return (
    <button
      ref={buttonRef}
      className={css.load_more_btn}
      onClick={() => {
        setPage(prevState => prevState + 1);

        setTimeout(() => {
          buttonRef.current?.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          });
        }, 500);
      }}
    >
      Load More
    </button>
  );
}

export default LoadMoreBtn;
