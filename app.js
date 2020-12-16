let tiles;

//function that handles rendering data from API response
const renderTiles = () => {

  const containerDiv = document.getElementById('container');

  tiles.map(tile => {
    const section = document.createElement('section');
    section.innerHTML = `
          <img
          src='${tile.multimedia[2].url}'
          class='thumbnail'>
          <p class='caption'>${tile.multimedia[2].caption}</p>
          <p class='abstract'>${tile.abstract}</p>
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
      
      renderTiles()
    })
}

fetchTileData();
