import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c',
    },
  };

  async function fetchCredits() {
    if (params.movieId === '') {
      return;
    }

    try {
      console.log(`Виконується фетч в компоненті Cast`);

      const responce = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}/credits`,
        options
      );
      const castsData = await responce.json();
      return castsData;
    } catch (error) {
      throw new Error('Упс щось пішло не так');
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

  if (status === Status.RESOLVED) {
    return <ResponseError error={error} />;
  }
}

export default Cast;
