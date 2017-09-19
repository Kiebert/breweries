import React, { Component } from 'react';
import logo from './../logo.svg';
import { breweries } from './../data/breweries.json';
import './app.css';
import List from './list';
import Maps from './../containers/maps';
import Details from './../containers/details';
//import Brewery from './brewery';
import Filter from './filter';



class App extends Component {

  constructor() {
    super();
    this.state = {
      breweries: []
    }
  }

  onFilterChange = (e = null) => {

    
    if (e === null) {
      this.setState({ breweries: [] });
      return;
    }
    const filter = e.target.value.toLowerCase();
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

  render() {
    return (
      <div className="App">

        {window.google &&
          <Maps addresses={breweries} />
        }
        <div className="App-header">
          <h2><img src={logo} className="App-logo" alt="logo" /> Brewery finder</h2>
        </div>

        <Filter onChange={this.onFilterChange} />
        {this.state.breweries.length === 0 &&
          <div className="App-Feedback">No breweries found</div>
        }

        {this.state.breweries.length > 0 &&
          <List items={this.state.breweries} />
        }
        <Details />
      </div>
    );
  }
}

export default App;
