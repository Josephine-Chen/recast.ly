var VideoList = ({videos, onEntryTitleClicked}) => (
  <div className="video-list media">
    {videos.map( (video) =>
      <VideoListEntry
      onEntryTitleClicked={onEntryTitleClicked}
      video={video}
      key={video.etag} />
    )}
  </div>
);

//VideoListEntry renders a video based on given input video
//VideoList maps all the example videos and renders each one by videolistentry


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
