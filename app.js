let tiles;

//function that handles rendering data from API response
const renderTiles = () => {

  const containerDiv = document.getElementById('container');

  //since the tiles variable is an object, and map only works on arrays, use Object.keys to map over the tiles variable
  Object.keys(tiles).map(tile => {
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
const fetchTileData =  async () => {

  await fetch("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=RB52gKxhAGBULNNMAs5gXARnnimLsKMn")
    //this first function is where make the API call and get the response
    .then(response => {
      return response.json()
    })
    //this second function is where we get and render API data
    .then(data => {
      console.log(JSON.stringify(data.results));
      tiles= data.results
      console.table(`Console log tiles variable: ${tiles}`)
      //typeeof returns that the tiles variable is an object
      console.log(typeof tiles)
      
      renderTiles()
    })
}

fetchTileData();