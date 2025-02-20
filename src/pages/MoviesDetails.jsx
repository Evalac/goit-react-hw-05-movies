import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { options, BASE_URL } from 'services/OptionsAPI';

import Loader from 'components/Loader/Loader';
import ResponseError from 'components/Errors/ResponseError';
import MovieDeatilsCard from 'components/MovieDetailsCard/MovieDetailsCard';

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
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  async function fetchMovieDetails() {
    if (params.movieId === '') {
      return;
    }
    try {
      console.log(`Виконується фетч в компоненті movieDetails`);

      const responce = await fetch(
        `${BASE_URL}/movie/${params.movieId}?language=en-US`,
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
    // eslint-disable-next-line
  }, []);

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <Link to={backLinkLocationRef.current}>Back to movie list</Link>

        <MovieDeatilsCard movieDetails={movieDetails} />
        <p>Additional information</p>
        <nav>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    );
  }

  if (status === Status.REJECTED) {
    return <ResponseError error={error} />;
  }
}

export default MoviesDetails;
