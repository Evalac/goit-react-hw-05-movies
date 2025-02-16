import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c',
    },
  };

  async function fetchReview() {
    if (params.movieId === '') {
      return;
    }

    try {
      console.log(`Виконується фетч в компоненті Cast`);

      const responce = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}/reviews`,
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
  }, []);

  if (status === Status.RESOLVED) {
    return (
      <>
        {reviewData.results.length <= 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
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
        )}
      </>
    );
  }

  if (status === Status.PENDING) {
    return <p>Завантажується...</p>;
  }

  if (status === Status.RESOLVED) {
    return <p>{error.message}</p>;
  }
}

export default Review;
