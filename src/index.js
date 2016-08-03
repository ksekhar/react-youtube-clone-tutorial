import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCHtaYe6Skr6qghFrWgnA6yqPPIODPL2fc';

import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('basketball');
  }

  videoSearch(term) {
    YTSearch({ term, key: API_KEY }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    console.log(this.state.videos);
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'))
