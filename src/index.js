import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY = 'AIzaSyCHtaYe6Skr6qghFrWgnA6yqPPIODPL2fc';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';

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
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)}, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'))
