import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL, options } from 'services/OptionsAPI';

import Loader from 'components/Loader/Loader';
import ResponseError from 'components/Errors/ResponseError';
import ReviewList from './ReviewList/ReviewList';

const Status = {
  IDLE: 'idle', //в режимі очікування
  PENDING: 'pending', //очікується виконання
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function Review() {
  const [status, setStatus] = useState(Status.IDLE);
  const [reviewData, setReviewData] = useState([]);
  const [error, setError] = useState(null);
  const params = useParams();

  async function fetchReview() {
    if (params.movieId === '') {
      return;
    }

    try {
      console.log(`Виконується фетч в компоненті Cast`);

      const responce = await fetch(
        `${BASE_URL}/movie/${params.movieId}/reviews`,
        options
      );
      const revData = await responce.json();
      return revData;
    } catch (error) {
      throw new Error('Упс щось пішло не так');
    }
  }

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchReview()
      .then(data => {
        setReviewData(data);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
    // eslint-disable-next-line
  }, []);

  if (status === Status.RESOLVED) {
    return (
      <>
        {reviewData.results.length <= 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          <ReviewList reviewData={reviewData} />
        )}
      </>
    );
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.RESOLVED) {
    return <ResponseError error={error} />;
  }
}

export default Review;
