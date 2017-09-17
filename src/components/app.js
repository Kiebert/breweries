import React, { Component } from 'react';
import logo from './../logo.svg';
import { breweries } from './../data/breweries.json';
import './app.css';
import Breweries from './breweries';
import Maps from './maps';
import Brewery from './brewery';
import Filter from './filter';

class App extends Component {

  constructor() {
    super();
    this.state = {
      breweries: [],
      currentBrewery: null
    }
  }

  onFilterChange = (e) => {

    const filter = e.target.value.toLowerCase();
    if (filter === '') {
      this.setState({ breweries: [] });
      return;
    }
    let foundBreweries = [];
    for (let i = 0; i < breweries.length; i++) {
      if (
        breweries[i].address.toLowerCase().indexOf(filter) > -1 ||
        breweries[i].city.toLowerCase().indexOf(filter) > -1 ||
        breweries[i].name.toLowerCase().indexOf(filter) > -1 ||
        breweries[i].zipcode.toLowerCase().indexOf(filter) > -1) {
        foundBreweries.push(breweries[i]);
        continue;
      }
    }
    this.setState({ breweries: foundBreweries });
  }

  onBreweryClick = (currentBrewery) => {
    this.setState({
      currentBrewery
    })
  }

  onCloseBrewery = () => {
    this.setState({
      currentBrewery: null
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Brewery finder</h2>
        </div>
        <Filter onChange={this.onFilterChange} />
        {this.state.breweries.length === 0 &&
          <div className="App-Feedback">No breweries found</div>
        }
        { window.google && this.state.breweries.length === 0 &&
          <Maps zoom={7} lat={52.0552809} lng={4.7969374} addresses={breweries}/>
        }


        {this.state.breweries.length > 0 &&
          <Breweries items={this.state.breweries} onClick={this.onBreweryClick} />
        }
        {this.state.currentBrewery !== null &&
          <Brewery data={this.state.currentBrewery} onCloseBrewery={this.onCloseBrewery} />
        }
      </div>
    );
  }
}

export default App;
