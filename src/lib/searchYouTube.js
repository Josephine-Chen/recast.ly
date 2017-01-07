var searchYouTube = (options, callback) => {
  var searchParams = {
    type: 'video',
    part: 'snippet',
    q: options.query,
    maxResults: options.max,
    key: options.key,
    videoEmbeddable: true
  }

  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: searchParams,
    success: function(data) {
      console.log(data.items);
      callback(data.items);
    },
    error: function(data) {
      console.log('Error D:');
    }
  });

};

window.searchYouTube = searchYouTube;
