import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import movieApi from '../../api/movieApi';
import MovieTiles from '../../components/MovieTiles/MovieTiles';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
  }

  async componentDidMount() {
    const getMovie = await movieApi.getMovies();
    this.setState({
      movieList: getMovie
    });
    console.log(this.state.movieList);
  }

  render() {
    return (
      <div className="HomePageContainer">
        <h1 className="Title">Movies</h1>
        <div className="movieTilesWrapper">
          { this.state.movieList.map((movie, i) => (
            <Link key={ i } to={ `/details/${movie.name}` }
              className="link"
            >
              <MovieTiles 
                title={ movie.name } 
                year={ movie.productionYear }
                genre={ movie.genre }
                synopsisShort={ movie.synopsisShort }
                synopsis={ movie.synopsis }
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
