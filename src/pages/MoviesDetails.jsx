import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Status = {
  IDLE: 'idle', //в режимі очікування
  PENDING: 'pending', //очікується виконання
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function MoviesDetails() {
  const [status, setStatus] = useState(Status.IDLE);
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);

  const params = useParams();
  console.log(params.movieId);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c',
    },
  };

  async function fetchMovieDetails() {
    if (params.movieId === '') {
      return;
    }
    try {
      console.log(`Виконується фетч в компоненті movieDetails`);

      const responce = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`,
        options
      );
      const movieInfo = await responce.json();
      return movieInfo;
    } catch (error) {
      throw new Error('Упс, щось пішлот не так...');
    }
  }

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMovieDetails()
      .then(movieInfo => {
        setMovieDetails(movieInfo);
        setStatus(Status.RESOLVED);
        console.log(movieDetails);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  if (status === Status.PENDING) {
    return <p>Завантажується...</p>;
  }

  if (status === Status.RESOLVED) {
    return (
      <section>
        <div>
          <img src="" alt="" />
          <ul>
            <li>
              <p>{movieDetails.title}</p>
            </li>
            <li>
              <p>User score/popularit: {movieDetails.popularity}</p>
            </li>

            <li>
              <p>Overview</p>
              <p>{movieDetails.overview}</p>
            </li>
            <li>
              Geners:
              {/* {movieDetails.genres.map(genres => (
              <p>{genres.name}</p>
            ))} */}
            </li>
          </ul>
        </div>
        <ul></ul>
      </section>
    );
  }

  if (status === Status.REJECTED) {
    return <p>{error.message}</p>;
  }
}

export default MoviesDetails;
