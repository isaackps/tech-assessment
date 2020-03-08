import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import movieApi from '../../api/movieApi';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { replaceSpace } from '../../utilities/utilities';

const DetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieId, setMovieId] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getMovieDetails = async () => {
      const movieId = replaceSpace(location.pathname.replace('/details/', ''));
      setMovieId(movieId);

      const movieList = await movieApi.getMovies();
      const movieDetails = movieList.filter(obj => obj.name === movieId);
      setMovieDetails(movieDetails[0]);

      setLoading(false);
    };
    
    getMovieDetails();
  }, []);

  return (
    <div className="DetailsPageContainer">
      <Link to="/" className="homeButton">Home</Link>
      <MovieDetails 
        movieId={ movieId }
        movieDetails={ movieDetails }
        loading={ loading }
      />
    </div>
  );
};

export default DetailsPage;
