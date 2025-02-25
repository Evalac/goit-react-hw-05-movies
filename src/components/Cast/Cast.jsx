import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, options } from 'services/OptionsAPI';

import CastCard from './CastCard/CastCard';
import Loader from 'components/Loader/Loader';
import ResponseError from 'components/Errors/ResponseError';

const Status = {
  IDLE: 'idle', //в режимі очікування
  PENDING: 'pending', //очікується виконання
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function Cast() {
  const [status, setStatus] = useState(Status.IDLE);
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const params = useParams();

  async function fetchCredits() {
    if (params.movieId === '') {
      return;
    }

    try {
      console.log(`Виконується фетч в компоненті Cast`);

      const responce = await fetch(
        `${BASE_URL}/movie/${params.movieId}/credits`,
        options
      );
      if (!responce.ok) {
        throw new Error(`HTTP error! Status: ${responce.status}`);
      }
      const castsData = await responce.json();
      return castsData;
    } catch (error) {
      throw new Error('Вибаче щось пішло не так');
    }
  }

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchCredits()
      .then(casts => {
        setCasts(casts);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
    // eslint-disable-next-line
  }, []);

  if (status === Status.RESOLVED) {
    return <CastCard casts={casts} />;
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <ResponseError error={error} />;
  }
}

export default Cast;
