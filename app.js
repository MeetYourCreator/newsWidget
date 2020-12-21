let tiles;



//function that handles rendering data from API response
const renderTiles = () => {
  const containerDiv = document.getElementById('section-container');
  
  tiles.map(tile => {
    console.log(tile.section)
    if (tile.section !== 'Arts' && tile.section !== 'Multimedia/Photos' && tile.thumbnail_standard !== undefined) {
      const section = document.createElement('section');
      section.innerHTML = `
          <a href='${tile.url}'>
          <h4 class='section'>${tile.section}</h4>
          <img
          src='${tile.thumbnail_standard}'
          class='thumbnail'>
          <p class='source'>${tile.source}</p>
          <p class='title'>${tile.title}</p>
          </a>
        `
      containerDiv.appendChild(section)
    }
    })
  
}

//function that handles the API call
const fetchTileData = async () => {

  await fetch("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=aZamlLmHCkb79p0ejlBxscpBnBUFx4bb")
    //this first function is where make the API call and get the response
    .then(response => {
      return response.json()
    })
    //this second function is where we get and render API data
    .then(data => {
      console.log(JSON.stringify(data.results));
      tiles = data.results
      console.log(tiles)
      renderTiles()
    })
}

fetchTileData();
