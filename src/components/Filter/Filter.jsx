import React, { PureComponent } from 'react';

class filter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filterBy: 'year',
      years: '2003',
      genre: 'Action'
    };
    this.setFilterObj = this.setFilterObj.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setYear = this.setYear.bind(this);
    this.setGenre = this.setGenre.bind(this);
  }


  setFilter(event) {
    this.setState({ filterBy: event.target.value });
  }

  setYear(event) {
    this.setState({ years: event.target.value });
  }

  setGenre(event) {
    this.setState({ genre: event.target.value });
  }

  setFilterObj() {
    this.props.onSetFilter(
      this.state.filterBy, 
      this.state.years, 
      this.state.genre
    );
  }

  render() {
    return (
      <div className="filterWrapper">
        <label>Filter By: </label>
        <select value={ this.state.filterBy } onChange={ this.setFilter }>
          <option value="year">year</option>
          <option value="genre">genre</option>
        </select>
        { this.state.filterBy === 'year' &&
          <select value={ this.state.years } onChange={ this.setYear }>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
        }
        { this.state.filterBy === 'genre' &&
          <select value={ this.state.genre } onChange={ this.setGenre }>
            <option value="Action">Action</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
            <option value="Adventure">Adventure</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        }
        <button className="button" onClick={ this.setFilterObj }>Filter</button>
        <button className="button" onClick={ this.props.onResetFilter }>reset</button>
      </div>
    );
  } 
}

export default filter;
