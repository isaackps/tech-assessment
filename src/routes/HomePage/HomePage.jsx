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
      filterType: '',
      filterValue: ''
    };
    this.setFilter = this.setFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  async componentDidMount() {
    const getMovie = await movieApi.getMovies();
    this.setState({
      movieList: getMovie
    });
  }

  setFilter(filterBy, years, genre) {
    this.setState({
      filterType: filterBy,
      filterValue: filterBy === 'year' ? years : genre
    });
  }

  async resetFilter() {
    this.setState({
      filterType: '',
      filterValue: ''
    });

    const movieList = await movieApi.getMovies();
    this.setState({
      movieList: movieList
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filterType !== prevState.filterType || 
      this.state.filterValue !== prevState.filterValue) {
      const filteredMovieList = filterMovieList(
        this.state.movieList, this.state.filterType, this.state.filterValue);
      this.setState({ movieList: filteredMovieList });
    }
  }

  render() {
    return (
      <div className="HomePageContainer">
        <h1 className="Title">Movies</h1>
        <Filter 
          onSetFilter={ this.setFilter }
          onResetFilter={ this.resetFilter }
        />
        <div className="movieTilesWrapper">
          { this.state.movieList.map((movie, i) => (
            <Link key={ i } to={ `/details/${movie.name}` }
              className="link"
            >
              <MovieTiles 
                title={ movie.name } 
                synopsisShort={ movie.synopsisShort }
                image={ movie.image }
                key={ i }
              />
            </Link>
          ))

          }
        </div>
      </div>
    );
  }
}

export default HomePage;
