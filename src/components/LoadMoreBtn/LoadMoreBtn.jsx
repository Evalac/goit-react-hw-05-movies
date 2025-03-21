import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ setPage }) {
  return (
    <button
      className={css.load_more_btn}
      onClick={() => {
        setPage(prevState => prevState + 1);
      }}
    >
      Load More
    </button>
  );
}

export default LoadMoreBtn;
