class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vids: [],
      currentVid: null
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }

  getYouTubeVideos(searchQuery) {
    var options = {
      query: searchQuery,
      max: 10,
      key: this.props.API_KEY
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        vids: videos,
        currentVid: videos[0]
      })
    );
  }

  onEntryTitleClicked(video) {
    this.setState({
      currentVid: video
    });
  }

  updateList(searchQuery) {
    _.debounce(this.getYouTubeVideos.bind(this), 500)(searchQuery);
  }

  render() {
    return (
      <div>
        <Nav onSearch={this.updateList.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVid}/>
        </div>
        <div className="col-md-5">
          <VideoList
            onEntryTitleClicked={this.onEntryTitleClicked.bind(this)}
            videos={this.state.vids}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
