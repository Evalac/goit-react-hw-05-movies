import css from './ReviewList.module.css';

function ReviewList({ reviewData }) {
  return (
    <section>
      <ul className="rewiev_list">
        {reviewData.results.map((review, index) => (
          <li key={index} className={css.rewiev_list_item}>
            <h1 className={css.rewiev_list_item_title}>{review.author}</h1>
            <article>{review.content}</article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReviewList;
