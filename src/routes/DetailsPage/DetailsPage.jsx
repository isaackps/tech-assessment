import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import movieApi from '../../api/movieApi';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

class DetailsPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: [],
      movieId: ''
    };
  }

  replaceSpace(word) {
    return word.replace(/%20/g, ' ');
  }

  async componentDidMount() {
    const movieId = this.replaceSpace(location.pathname.replace('/details/', ''));
    this.setState({
      movieId
    });

    const movieList = await movieApi.getMovies();
    const movieDetails = movieList.filter(obj => obj.name === movieId);
    this.setState({
      movieDetails: movieDetails[0]
    });
  }

  render() {
    return (
      <div className="DetailsPageContainer">
        <Link to="/" className="homeButton">Home</Link>
        <MovieDetails 
          movieId={ this.state.movieId }
          movieDetails={ this.state.movieDetails }
        />
      </div>
    );
  }
}

export default DetailsPage;
