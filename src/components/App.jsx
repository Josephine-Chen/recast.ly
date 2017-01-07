class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: {exampleVideoData},
      currentVid: {
        id: {
          videoId: '',
        },
        snippet: {
          title: '',
          description: '',
          },
      }
    };
  }
  update(newVid) {
    this.setState({
      currentVid: newVid
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVid}/>
        </div>
        <div className="col-md-5">
          <VideoList onEntryTitleClicked={this.update.bind(this)} videos={exampleVideoData}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
