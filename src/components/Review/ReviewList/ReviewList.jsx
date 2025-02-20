function ReviewList({ reviewData }) {
  return (
    <section>
      <ul>
        {reviewData.results.map((review, index) => (
          <li key={index}>
            <h1>{review.author}</h1>
            <article>{review.content}</article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReviewList;
