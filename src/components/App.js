import React from 'react';
import SearchBar from './SearchBar';
import api from '../api/api';
import VideoList from './VideoList';
import VideoShow from './VideoShow';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async term => {
    const response = await api.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className="row">
          <div className="col s8">
            <VideoShow video={this.state.selectedVideo} />
          </div>
          <div className="col s4">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
