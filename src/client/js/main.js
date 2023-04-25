import "../scss/styles.scss";

export async function fetchPlaylistItmes () {
    let endpoint = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${process.env.LASTFM_KEY}&format=json`;
    fetch(endpoint).then((res) => res.json())
    .then((d) => {
        console.log(d);
    })
}

export async function fetchTrackInfo(track,artist) {
    let endpoint = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.LASTFM_KEY}&artist=${artist}&track=${track}&format=json`;
    const response = await fetch(endpoint);
    try {
      if (response.ok) {
        // response.status >= 200 && response.status < 300
        return response.json();
      } else {
        return response.error;
      }
    } catch (error) {
      console.error(error);
    
      const errorBody = await error.response.text();
      console.error(`Error body: ${errorBody}`);
    }
  }