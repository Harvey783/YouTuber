import React from 'react';
import SearchBar from './SearchBar';
import api from '../api/api';

class App extends React.Component {
  onSearchSubmit = term => {
    api.get('/search', {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
