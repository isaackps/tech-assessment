import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import movieApi from '../../api/movieApi';
import MovieTiles from '../../components/MovieTiles/MovieTiles';
import Filter from '../../components/Filter/Filter';
import { filterMovieList } from '../../utilities/utilities';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      filteredList: [],
      filterType: '',
      filterValue: '',
      loading: true
    };
    this.setFilter = this.setFilter.bind(this);
  }

  async componentDidMount() {
    const getMovie = await movieApi.getMovies();
    this.setState({
      movieList: getMovie,
      filteredList: getMovie,
      loading: false
    });
  }

  setFilter(filterBy, years, genre) {
    this.setState({
      filterType: filterBy,
      filterValue: filterBy === 'year' ? years : genre
    });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (
      this.state.filterType !== prevState.filterType || 
      this.state.filterValue !== prevState.filterValue
    ) {
      const filteredMovieList = filterMovieList(
        this.state.movieList, 
        this.state.filterType, 
        this.state.filterValue
      );
      this.setState({ filteredList: filteredMovieList });
    }
  }

  render() {
    const { filteredList, loading } = this.state;
    const renderMovies = 
      filteredList && filteredList.length === 0 ? (
        <h2>No Movies found</h2>
      ) : (
        filteredList.map((movie, i) => (
          <Link key={ i } to={ `/details/${movie.name}` } className="link">
            <MovieTiles 
              title={ movie.name } 
              synopsisShort={ movie.synopsisShort }
              image={ movie.image }
              key={ i }
            />
          </Link>
        ))
      );

    const loadingMovies = loading ? (
      <h2>Loading Movies ....</h2>
    ) : (
      renderMovies
    );

    return (
      <div className="HomePageContainer">
        <h1 className="Title">Movies</h1>
        <Filter onSetFilter={ this.setFilter } />
        <div className="movieTilesWrapper">{ loadingMovies }</div>
      </div>
    );
  }
}

export default HomePage;
