import React from 'react';
//const VideoDetail = (props) => ...
// (props) can be replaced by the incoming object
const VideoDetail = ({video}) => {
  if (!video){
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  //ES5 const url = 'https://www.youtune.com/embed/' + videoId;
  //ES6
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"
          src={url}
        >
        </iframe>
      </div>
      <div>
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
     </div>
  )
}

export default VideoDetail;
