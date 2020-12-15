let tiles;

//function that handles rendering data from API response
const renderTiles = () => {

  const containerDiv = document.getElementById('container');

  tiles.map(tile => {
    const section = document.createElement('section');
    section.innerHTML = `
          <div class='tile-container'>
          <img
          src='${tile.thumbnail_standard}'
          class='thumbnail'>
          <p>${tile.title}</p>
          <p>${tile.abstract}</p>
          </div>
        `
    containerDiv.appendChild(section)
    
  })
}

//function that handles the API call
const fetchTileData =  () => {

  fetch("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=RB52gKxhAGBULNNMAs5gXARnnimLsKMn")
    .then(response => {
      
      return response
    })
    .then(response => {
      tiles = response.json()
      console.log(tiles)
      // renderTiles()
    })
}

fetchTileData();